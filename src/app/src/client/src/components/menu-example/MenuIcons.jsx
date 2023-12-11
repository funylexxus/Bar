import React from 'react';

export const MenuIcons = (props) => {
  return (
    <li className="nav-item">
      <a className={props.linkClassName} data-bs-toggle="pill" href={props.tabName}>
          <i className={props.iconsClassName}></i>
          <div className="ps-3">
              <small className="text-body">{props.text}</small>
              <h6 className="mt-n1 mb-0">{props.secondText}</h6>
          </div>
      </a>
    </li>
  );
};