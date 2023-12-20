import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DrinksList from '../drinks/DrinksList';
import { Card, CardContent, Typography } from '@mui/material';
import { useContext } from 'react';
import { CartContext, orderStatuses } from '../../context/cartContext';
import { CardFooter, CardHeader } from 'react-bootstrap';
import { CartForm } from './CartForm';

export default function Cart() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [order, setOrder] = useContext(CartContext);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const anchor = 'right';

  return (
    <div>
      <React.Fragment key={anchor}>
        <ShoppingCartOutlinedIcon onClick={toggleDrawer(anchor, true)}>
          {anchor}
        </ShoppingCartOutlinedIcon>
        <SwipeableDrawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
        >
          <Box className="content-center">
            <Card
              sx={{ width: 400 }}
              role="presentation"
              // onClick={toggleDrawer(anchor, false)}
              // onKeyDown={toggleDrawer(anchor, false)}
            >
              <CardHeader>
                <Typography
                  gutterBottom
                  variant="h5"
                  mx="60px"
                  sx={{ textAlign: 'center', marginTop: '1rem' }}
                >
                  Cart
                </Typography>
              </CardHeader>
              {order.status === orderStatuses.inProgress ? (
                <CardContent>
                  <CartForm />
                  <List style={{ maxHeight: '100%', overflow: 'auto' }}>
                    <DrinksList drinks={order.drinks} />
                  </List>
                </CardContent>
              ) : (
                <Typography
                  gutterBottom
                  variant="h4"
                  mx="60px"
                  sx={{ maxWidth: 300, textAlign: 'center', marginTop: '1rem' }}
                >
                  Order Successfully Submited!
                </Typography>
              )}
            </Card>
          </Box>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
