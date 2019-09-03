import React, { useState,useEffect } from 'react';
import useDarkMode from '../hooks/useDarkMode';
import {Button} from 'semantic-ui-react';

const Navbar = (props) => {
  const [darkMode, setDarkMode] = useDarkMode();

  useEffect(()=>{
    props.lineColor(darkMode);
  },[darkMode]);

  const toggleMode = e => {
    e.preventDefault();
    // props.lineColor(!darkMode);
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <Button onClick={()=>props.previousPage()}>Previous Page</Button>
      <Button onClick={()=>props.nextPage()}>Next Page</Button>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
