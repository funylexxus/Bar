import React, { useContext, useEffect, useMemo, useState } from 'react';
import { styled } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './DrinkItem.css';
import { Grid, Paper, Typography } from '@mui/material';
import { CartContext, orderStatuses } from '../../context/cartContext';
import _ from 'lodash';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export const DrinkItem = (props) => {
  const [order, setOrder] = useContext(CartContext);
  const [count, setCount] = useState(0);

  const calculateTotalCount = (newDrinks) =>
    _.reduce(
      newDrinks,
      (totalCount, currDrink) => totalCount + currDrink.price * currDrink.count,
      0,
    );

  const addItem = () => {
    const newDrinks = [...order.drinks];
    const drink = _.find(newDrinks, (drink) => drink._id === props.drink._id);

    if (drink) {
      drink.count += 1;
    } else {
      const newDrink = { ...props.drink };
      newDrink.count = 1;
      newDrinks.push(newDrink);
    }
    setOrder({
      ...order,
      drinks: newDrinks,
      totalCount: calculateTotalCount(newDrinks),
      status: orderStatuses.inProgress,
    });
  };

  const removeItem = () => {
    const newDrinks = [...order.drinks];
    const drink = _.find(
      order.drinks,
      (drink) => drink._id === props.drink._id,
    );
    if (drink?.count >= 1) {
      drink.count -= 1;

      if (drink?.count === 0) {
        _.remove(newDrinks, (d) => d._id === props.drink._id);
        setCount(0);
      }
      setOrder({
        ...order,
        drinks: newDrinks,
        totalCount: calculateTotalCount(newDrinks),
        status: orderStatuses.inProgress,
      });
    }
  };
  useEffect(() => {
    const drink = _.find(
      order.drinks,
      (drink) => drink._id === props.drink._id,
    );
    if (drink) {
      setCount(drink.count);
    }
    console.log('order', order);
  }, [order.drinks]);

  useEffect(() => {
    if (order.status === orderStatuses.success) {
      setCount(0);
    }
  }, [order.status]);
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs sx={{ maxHeight: 200 }}>
          <Img alt="complex" src={props.drink.imgUrl} />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {props.drink.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.drink.description}
              </Typography>
            </Grid>
            <Grid item container spacing={2}>
              <Grid item xs>
                <RemoveIcon sx={{ cursor: 'pointer' }} onClick={removeItem} />
              </Grid>
              <Grid item xs>
                {count}
              </Grid>
              <Grid item xs>
                <AddIcon sx={{ cursor: 'pointer' }} onClick={addItem} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs container direction="column" spacing={0.5}>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              {props.drink.price}$
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              {props.drink.volume} l
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
