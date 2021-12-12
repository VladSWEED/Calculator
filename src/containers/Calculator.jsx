import React from 'react';
import './Calculator.css';
import Digits from '../components/Digits/Digits';
import Operators from '../components/Operators/Operators';
import Display from '../components/Display/Display';

const Calculator = () => (
  <div className="container">
    <div className="calculator">
      <Display />
      <Operators />
      <Digits />
    </div>
  </div>
);
export default Calculator;
