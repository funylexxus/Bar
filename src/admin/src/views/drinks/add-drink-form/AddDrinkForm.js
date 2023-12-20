// ** React Imports
import { useContext, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import Cookies from 'js-cookie'
import { DrinksContext } from 'src/@core/context/drinksContext'
import customAxios from 'src/utils/customAxios'
import { ImgInput } from './ImgInput'

const AddDrinkForm = props => {
  // ** States
  const [values, setValues] = useState({
    inputValues: {
      name: 'Duncan Taylor',
      description:
        'Duncan Taylor has been laying down casks from premium Scottish distilleries for decades and now owns one of the largest privately held collections of vintage and rare scotch whisky casks.',
      price: '36.5',
      volume: '0.75'
    },
    validation: {
      name: true,
      description: true,
      price: true,
      volume: true
    },
    helperText: {
      name: '',
      description: '',
      price: '',
      volume: ''
    }
  })
  const [imgSrc, setImgSrc] = useState('')
  const [file, setFile] = useState(null)

  const [, getDrinks] = useContext(DrinksContext)

  const handleChange = prop => event => {
    console.log(values)
    setValues({
      ...values,
      inputValues: { ...values.inputValues, [prop]: event.target.value }
    })
  }

  const validateField = prop => event => {
    const isNotEmpty = !_.isEmpty(values.inputValues[prop])
    const isValid = isNotEmpty
    const helperText = isValid ? '' : `${_.upperFirst(prop)} is required`

    setValues({
      ...values,
      validation: { ...values.validation, [prop]: isValid },
      helperText: { ...values.helperText, [prop]: helperText }
    })
  }

  const validateData = () => {
    const validation = {}
    const helperText = {}
    const validationKeys = _.keys(values.validation)

    _.each(validationKeys, key => {
      const isNotEmpty = !_.isEmpty(values.inputValues[key])
      const isValid = isNotEmpty
      validation[key] = isValid

      if (!isValid) {
        helperText[key] = `${_.upperFirst(key)} is required`
      }
    })

    setValues({ ...values, validation, helperText })
  }

  const setHelperText = errorMessages => {
    const validation = { ...values.validation }
    const helperText = { ...values.helperText }

    _.each(errorMessages, message => {
      const key = _.split(message, ' ')[0]

      validation[key] = false
      helperText[key] = message
    })

    setValues({ ...values, validation, helperText })
  }

  const create = async () => {
    try {
      if (_.some(values.inputValues, inputValue => _.isEmpty(inputValue))) {
        return
      }

      let imgUrl = null

      if (file) {
        const formData = new FormData()
        formData.append('file', file, file.name)

        const {
          data: { Location }
        } = await customAxios.post(
          `${process.env.API_URL}/drinks/upload`,
          formData
        )

        imgUrl = Location
      }

      const token = Cookies.get('token')
      await customAxios.post(
        `${process.env.API_URL}/drinks`,
        {
          ...values.inputValues,
          imgUrl
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )

      getDrinks({
        page: 1,
        itemsPerPage: 5,
        sortField: 'name',
        sortOrder: 'asc'
      })
    } catch (error) {
      console.log('error', error)
      setHelperText(error.response.data.message)
    }
  }

  const onChange = e => {
    const reader = new FileReader()
    const { files } = e.target

    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result)
      reader.readAsDataURL(files[0])
      setFile(files[0])
    }
  }

  return (
    <Card sx={{ width: '100%' }}>
      <CardHeader title='Add drink' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <ImgInput onChange={onChange} imgSrc={imgSrc} setImgSrc={setImgSrc} />
          <Grid container spacing={5}>
            <Grid item xs={15}>
              <TextField
                fullWidth
                type='name'
                label='Name'
                placeholder=''
                error={!values.validation.name}
                helperText={values.helperText.name}
                value={values.inputValues.name}
                onChange={handleChange('name')}
                onBlur={validateField('name')}
              />
            </Grid>
            <Grid item xs={15}>
              <TextField
                fullWidth
                type='description'
                label='Description'
                placeholder=''
                error={!values.validation.description}
                helperText={values.helperText.description}
                value={values.inputValues.description}
                onChange={handleChange('description')}
                onBlur={validateField('description')}
              />
            </Grid>
            <Grid item xs={15}>
              <TextField
                fullWidth
                type='price'
                label='Price'
                placeholder=''
                error={!values.validation.price}
                helperText={values.helperText.price}
                value={values.inputValues.price}
                onChange={handleChange('price')}
                onBlur={validateField('price')}
              />
            </Grid>

            <Grid item xs={15}>
              <TextField
                fullWidth
                type='volume'
                label='Volume'
                placeholder=''
                error={!values.validation.volume}
                helperText={values.helperText.volume}
                value={values.inputValues.volume}
                onChange={handleChange('volume')}
                onBlur={validateField('volume')}
              />
            </Grid>
            <Grid item xs={1.5}>
              <Button
                fullWidth
                size='large'
                type='submit'
                variant='contained'
                sx={{ marginBottom: 7 }}
                onClick={create}
              >
                Create
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default AddDrinkForm
