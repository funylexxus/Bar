import React from 'react';
import Navbar from '../navbar/Navbar';
import NavbarAdd from '../navbar/NavbarAdd';
import './Menu.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const { useEffect, useState } = require('react');

function MenuTestPage() {
  const [drinks, setDrinks] = useState([]);
  const navigate = useNavigate();

  try {
    useEffect(async () => {
      {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/drinks`);
        console.log('res', res);
        setDrinks(res.data.drinks);
        // const token = res.data.token;
      }
    }, []);

    // if (token) {
    //   Cookies.set('token', token, { expires: 3, secure: true });
    //   navigate('/');
    // }
  } catch (error) {
    console.log(error);
  }
  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  //   console.log(values);
  // };

  return (
    <div className="container-xxl bg-white p-0">
      <Navbar />
      <NavbarAdd pageName={'Menu'} pageTitle={'Menu'} />
      {drinks.map((drink) => {
        return (
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="d-flex flex-row justify-content-between"></div>
              <li className="d-flex flex-row">
                <span className="text-primary">{drink.name}</span>
                <span className="text-primary">{drink.description}</span>
                <span className="text-primary">{drink.price}</span>
                <span className="text-primary">{drink.volume}</span>
              </li>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MenuTestPage;

// const foo = () => {

// }

// const a = '1'
// a = 2

// useEffect(() => {
// //code
// }, [a])
