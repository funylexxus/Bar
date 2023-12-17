import './Menu.css';
import React from 'react';
import menu_1 from '../img/menu-1.jpg';
import menu_2 from '../img/menu-2.jpg';
import menu_3 from '../img/menu-3.jpg';
import menu_4 from '../img/menu-4.jpg';
import menu_5 from '../img/menu-5.jpg';
import menu_6 from '../img/menu-6.jpg';
import menu_7 from '../img/menu-7.jpg';
import menu_8 from '../img/menu-8.jpg';
import { MenuIcons } from './MenuIcons';
import { MenuItem } from './MenuItem';

function Menu() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            Food Menu
          </h5>
          <h1 className="mb-5">Most Popular Items</h1>
        </div>

        <div
          className="tab-className text-center wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
            <MenuIcons
              linkClassName={
                'd-flex align-items-center text-start mx-3 ms-0 pb-3 active'
              }
              tabName={'#tab-1'}
              iconsClassName={'fa fa-beer fa-2x text-primary '}
              text={'Low '}
              secondText={'Alcohol Drinks'}
            />

            <MenuIcons
              linkClassName={'d-flex align-items-center text-start mx-3 pb-3'}
              tabName={'#tab-2'}
              iconsClassName={'fa fa-wine-glass fa-2x text-primary'}
              text={'Medium and Strong'}
              secondText={'Alcohol Drinks'}
            />

            <MenuIcons
              linkClassName={
                'd-flex align-items-center text-start mx-3 me-0 pb-3'
              }
              tabName={'#tab-3'}
              iconsClassName={'fa fa-hamburger fa-2x text-primary'}
              text={'Snacks'}
              secondText={'For Drinks'}
            />
          </ul>

          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                <MenuItem
                  src={menu_1}
                  itemName={'Chicken Burger'}
                  itemPrice={'$115'}
                  itemDescr={'Ipsum ipsum clita erat amet dolor justo diam'}
                />

                <MenuItem
                  src={menu_2}
                  itemName={'Chicken Burger'}
                  itemPrice={'$115'}
                  itemDescr={'Ipsum ipsum clita erat amet dolor justo diam'}
                />

                <MenuItem
                  src={menu_3}
                  itemName={'Chicken Burger'}
                  itemPrice={'$115'}
                  itemDescr={'Ipsum ipsum clita erat amet dolor justo diam'}
                />

                <MenuItem
                  src={menu_4}
                  itemName={'Chicken Burger'}
                  itemPrice={'$115'}
                  itemDescr={'Ipsum ipsum clita erat amet dolor justo diam'}
                />

                <MenuItem
                  src={menu_5}
                  itemName={'Chicken Burger'}
                  itemPrice={'$115'}
                  itemDescr={'Ipsum ipsum clita erat amet dolor justo diam'}
                />

                <MenuItem
                  src={menu_6}
                  itemName={'Chicken Burger'}
                  itemPrice={'$115'}
                  itemDescr={'Ipsum ipsum clita erat amet dolor justo diam'}
                />

                <MenuItem
                  src={menu_7}
                  itemName={'Chicken Burger'}
                  itemPrice={'$115'}
                  itemDescr={'Ipsum ipsum clita erat amet dolor justo diam'}
                />

                <MenuItem
                  src={menu_8}
                  itemName={'Chicken Burger'}
                  itemPrice={'$115'}
                  itemDescr={'Ipsum ipsum clita erat amet dolor justo diam'}
                />
              </div>
            </div>

            <div id="tab-2" className="tab-pane fade show p-0">
              <div className="row g-4">
                <MenuItem
                  src={menu_1}
                  itemName={'Chicken Burger'}
                  itemPrice={'$115'}
                  itemDescr={'Ipsum ipsum clita erat amet dolor justo diam'}
                />

                <MenuItem
                  src={menu_2}
                  itemName={'Chicken Burger'}
                  itemPrice={'$115'}
                  itemDescr={'Ipsum ipsum clita erat amet dolor justo diam'}
                />

                <MenuItem
                  src={menu_3}
                  itemName={'Chicken Burger'}
                  itemPrice={'$115'}
                  itemDescr={'Ipsum ipsum clita erat amet dolor justo diam'}
                />

                <MenuItem
                  src={menu_4}
                  itemName={'Chicken Burger'}
                  itemPrice={'$115'}
                  itemDescr={'Ipsum ipsum clita erat amet dolor justo diam'}
                />

                <MenuItem
                  src={menu_5}
                  itemName={'Chicken Burger'}
                  itemPrice={'$115'}
                  itemDescr={'Ipsum ipsum clita erat amet dolor justo diam'}
                />

                <MenuItem
                  src={menu_6}
                  itemName={'Chicken Burger'}
                  itemPrice={'$115'}
                  itemDescr={'Ipsum ipsum clita erat amet dolor justo diam'}
                />

                <MenuItem
                  src={menu_7}
                  itemName={'Chicken Burger'}
                  itemPrice={'$115'}
                  itemDescr={'Ipsum ipsum clita erat amet dolor justo diam'}
                />

                <MenuItem
                  src={menu_8}
                  itemName={'Chicken Burger'}
                  itemPrice={'$115'}
                  itemDescr={'Ipsum ipsum clita erat amet dolor justo diam'}
                />
              </div>
            </div>

            <div id="tab-3" className="tab-pane fade show p-0">
              <div className="row g-4">
                <MenuItem
                  src={menu_1}
                  itemName={'Chicken Burger'}
                  itemPrice={'$115'}
                  itemDescr={'Ipsum ipsum clita erat amet dolor justo diam'}
                />

                <MenuItem
                  src={menu_2}
                  itemName={'Chicken Burger'}
                  itemPrice={'$115'}
                  itemDescr={'Ipsum ipsum clita erat amet dolor justo diam'}
                />

                <MenuItem
                  src={menu_3}
                  itemName={'Chicken Burger'}
                  itemPrice={'$115'}
                  itemDescr={'Ipsum ipsum clita erat amet dolor justo diam'}
                />

                <MenuItem
                  src={menu_4}
                  itemName={'Chicken Burger'}
                  itemPrice={'$115'}
                  itemDescr={'Ipsum ipsum clita erat amet dolor justo diam'}
                />
                <MenuItem
                  src={menu_5}
                  itemName={'Chicken Burger'}
                  itemPrice={'$115'}
                  itemDescr={'Ipsum ipsum clita erat amet dolor justo diam'}
                />

                <MenuItem
                  src={menu_6}
                  itemName={'Chicken Burger'}
                  itemPrice={'$115'}
                  itemDescr={'Ipsum ipsum clita erat amet dolor justo diam'}
                />

                <MenuItem
                  src={menu_7}
                  itemName={'Chicken Burger'}
                  itemPrice={'$115'}
                  itemDescr={'Ipsum ipsum clita erat amet dolor justo diam'}
                />

                <MenuItem
                  src={menu_8}
                  itemName={'Chicken Burger'}
                  itemPrice={'$115'}
                  itemDescr={'Ipsum ipsum clita erat amet dolor justo diam'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
