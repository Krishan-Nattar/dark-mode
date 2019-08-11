import React, { useState,useEffect } from 'react';
import useDarkMode from '../hooks/useDarkMode';

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
      <button onClick={()=>props.previousPage()}>Previous Page</button>
      <button onClick={()=>props.nextPage()}>Next Page</button>
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
