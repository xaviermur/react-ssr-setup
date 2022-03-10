import React, { useState,useEffect,useRef } from "react";

import css from './header.module.css';

const Header = (props) => {

  const [content, setContent] = useState(props.item.default);

  return (
    <h1 className={props.class ?? css.default}>{ content }</h1>
  );

}

export default Header;
