import React from 'react';
import Badge from 'react-bootstrap/Badge';
import './PhonewordsResults.css';

function PhonewordsResults({ data }) {
  // ID to use as a parameter for key
  var id = 0;

  return (
    <div>
      <h3 className='title'>List of Phone Words: </h3>
      {Object.keys(data).map(key => (
        <Badge bg='secondary' className='phoneword' key={id++}>
          {data[key]}
        </Badge>
      ))}
    </div>
  );
}

export default PhonewordsResults;
