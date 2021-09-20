import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Screen from './Screen';
import './Keyboard.css';

function Keyboard(props) {
  const MAX_LENGTH = 6; // Max length of the word

  const [number, setNumber] = useState([]);

  // Add element inside array
  const addNumber = e => {
    if (number.length <= MAX_LENGTH) {
      setNumber([...number, e]);
    }
  };

  let concatenateNumber = number.join('');

  // Clear the array
  const clearNumber = e => {
    setNumber((number.length = 0));
  };

  // Remove the last element from the array
  const backNumber = e => {
    // It just removes one element from the array. Should be FIX
    setNumber(number.splice(-1));
  };

  const sendData = () => {
    axios
      .post(`http://localhost:9000/api/v1/phonewords/${concatenateNumber}`)
      .then(response => {
        props.onGettingData(response.data.phonewords);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <Screen typeNumber={concatenateNumber} />
      <div
        className='keyboard'
        value={'example'}
        onClick={e => addNumber(e.target.value, 'value')}
      >
        {/* Keyboard */}
        <Button variant='secondary' disabled value='1'>
          1{' '}
        </Button>
        <Button variant='secondary' value='2'>
          2 abc
        </Button>
        <Button variant='secondary' value='3'>
          3 def
        </Button>
        <Button variant='secondary' value='4'>
          4 ghi
        </Button>
        <Button variant='secondary' value='5'>
          5 jkl
        </Button>
        <Button variant='secondary' value='6'>
          6 mno
        </Button>
        <Button variant='secondary' value='7'>
          7 pqrs
        </Button>
        <Button variant='secondary' value='8'>
          8 tuv
        </Button>
        <Button variant='secondary' value='9'>
          9 wxyz
        </Button>
        <Button variant='warning' onClick={backNumber}>
          Back
        </Button>
        <Button variant='secondary' disabled value='0'>
          0
        </Button>
        <Button variant='danger' onClick={clearNumber}>
          Clear
        </Button>
      </div>
      <div className='d-grid gap-2 m-2'>
        <Button variant='outline-success' size='lg' onClick={sendData}>
          Generate Phone Words
        </Button>
      </div>
    </div>
  );
}

export default Keyboard;
