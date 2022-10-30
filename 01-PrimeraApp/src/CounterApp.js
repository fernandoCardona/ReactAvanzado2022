import React,{ Fragment, useState } from 'react';
import PropTypes from "prop-types";
 
 

function CounterApp({value}) {
  //State
  const [ counter, setCounter ]= useState ( 0 );
  

  //HandleAdd
  const handleAdd = (e) => {
    setCounter(counter + 1);
    //setCounter( (c) => c +1); 
  };
  //HandleAdd
  const handleReset = (e) => {
    setCounter(value);
    
  };
  //HandleLess
  const handleLess = (e) => {
    if(counter <= 0){
      return
    }else{
      setCounter(counter - 1);
    //setCounter( (c) => c +1); 
    }
    
  };


  return (
    <Fragment>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>
      <button onClick={ handleAdd }>+1</button>
      <button onClick={ handleReset }>Reset</button>
      <button onClick={ handleLess }>-1</button>
    </Fragment> 
  );
}

CounterApp.propTypes = {
  value: PropTypes.number
}
export default CounterApp;
