import React, { useEffect, useMemo, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import customAxios from '../../utils/customAxios';
import _ from 'lodash';
import { DrinkItem } from './DrinkItem';
import DrinksList from './DrinksList';

export default function DrinksListFetcher() {
  const [drinks, setDrinks] = useState([]);
  const fetchDrinks = async ({
    page = 1,
    itemsPerPage = 5,
    sortField = 'name',
    sortOrder = 'asc',
    keyword,
    signal,
  }) => {
    try {
      const {
        data: { drinks, pagination },
      } = await customAxios.get(`${process.env.REACT_APP_API_URL}/drinks`, {
        signal,
        params: {
          page: _.parseInt(page),
          itemsPerPage,
          sortField,
          sortOrder,
          keyword,
        },
      });
      return { drinks, pagination };
    } catch (errorData) {
      console.log(errorData);
      return { error: errorData };
    }
  };
  useMemo(async () => {
    const { drinks, pagination, error } = await fetchDrinks({
      page: 1,
      itemsPerPage: 10,
      sortField: 'name',
      sortOrder: 'asc',
    });
    if (error) {
      return;
    }
    setDrinks(drinks);
  }, []);

  return <DrinksList drinks={drinks} />;
}
