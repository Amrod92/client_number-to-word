import React from 'react';
import Button from 'react-bootstrap/Button';
import './Keyboard.css';

function Keyboard() {
  return (
    <div className='keyboard'>
      <Button>⯇</Button>
      <Button>⯈</Button>
      <Button>⌫</Button>
      <Button disabled>1</Button>
      <Button>2 abc</Button>
      <Button>3 def</Button>
      <Button>4 ghi</Button>
      <Button>5 jkl</Button>
      <Button>6 mno</Button>
      <Button>7 pqrs</Button>
      <Button>8 tuv</Button>
      <Button>9 wxyz</Button>
      <Button>*</Button>
      <Button>0 ⌴</Button>
      <Button disabled>#</Button>
    </div>
  );
}

export default Keyboard;
