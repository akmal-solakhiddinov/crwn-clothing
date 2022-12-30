import React from "react";
// import {useNavigate} from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { useHistory, useRouteMatch } from "react-router-dom";
// import { useSpring } from 'react-spring';

import "./menu-item.scss";

const MenuItem = ({ title, imageUrl, size /* , linkUrl */ }) => {
  // const history = useHistory();
  // const match = useRouteMatch();
  // const handleHistory = () => history.push(`${match.url}${linkUrl}`);
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        // onClick={handleHistory}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
