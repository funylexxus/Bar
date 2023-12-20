import React, { useContext, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import _ from 'lodash';
import { CartContext, orderStatuses } from '../../context/cartContext';
import customAxios from '../../utils/customAxios';

export function CartForm() {
  const [values, setValues] = useState({
    inputValues: {
      address: '',
      phoneNumber: '',
    },
    showPassword: false,
    validation: {
      address: true,
      phoneNumber: true,
    },
    helperText: {
      address: '',
      phoneNumber: '',
    },
  });

  const [order, setOrder] = useContext(CartContext);
  const submitOrder = async () => {
    try {
      validateData();

      if (_.some(values.inputValues, (inputValue) => _.isEmpty(inputValue))) {
        return;
      }

      const data = await customAxios.post(
        `${process.env.REACT_APP_API_URL}/orders`,
        {
          ...order,
          ...values.inputValues,
        },
      );
      setOrder({ drinks: [], totalCount: 0, status: orderStatuses.success });
    } catch (error) {
      console.log(error);
      setHelperText(error?.response?.data?.message);
    }
  };

  const handleChange = (prop) => (event) => {
    setValues({
      ...values,
      inputValues: { ...values.inputValues, [prop]: event.target.value },
    });
  };

  const validateField = (prop) => (event) => {
    const isNotEmpty = !_.isEmpty(values.inputValues[prop]);
    const isValid = isNotEmpty;
    const helperText = isValid ? '' : `${_.upperFirst(prop)} is required`;

    setValues({
      ...values,
      validation: { ...values.validation, [prop]: isValid },
      helperText: { ...values.helperText, [prop]: helperText },
    });
  };

  const setHelperText = (errorMessages) => {
    const validation = { ...values.validation };
    const helperText = { ...values.helperText };

    _.each(errorMessages, (message) => {
      const key = _.split(message, ' ')[0];

      validation[key] = false;
      helperText[key] = message;
    });

    setValues({ ...values, validation, helperText });
  };

  const validateData = () => {
    const validation = {};
    const helperText = {};
    const validationKeys = _.keys(values.validation);

    _.each(validationKeys, (key) => {
      const isNotEmpty = !_.isEmpty(values.inputValues[key]);
      const isValid = isNotEmpty;
      validation[key] = isValid;

      if (!isValid) {
        helperText[key] = `${_.upperFirst(key)} is required`;
      }
    });

    setValues({ ...values, validation, helperText });
  };

  return (
    <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
      <TextField
        fullWidth
        type="address"
        label="Address"
        sx={{ marginBottom: 4 }}
        onChange={handleChange('address')}
        onBlur={validateField('address')}
        error={!values.validation.address}
        helperText={values.helperText.address}
      />
      <TextField
        fullWidth
        type="number"
        label="Phone number"
        sx={{ marginBottom: 4 }}
        onChange={handleChange('phoneNumber')}
        onBlur={validateField('phoneNumber')}
        error={!values.validation.phoneNumber}
        helperText={values.helperText.phoneNumber}
      />
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Button
          size="medium"
          type="submit"
          variant="contained"
          sx={{ margin: 'auto' }}
          onClick={submitOrder}
        >
          Submit oder
        </Button>
      </Box>
    </form>
  );
}
