import React from 'react';

const HelloWorld = () => {
  
  function sayHello() {
    alert('Hello, World!');
  }
  
  return (
    <button onClick={sayHello}>Click mee!</button>
  );
};

export default HelloWorld;    
