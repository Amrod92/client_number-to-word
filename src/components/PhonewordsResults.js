import React from 'react';
import Badge from 'react-bootstrap/Badge';

function PhonewordsResults({ data }) {
  var id = 0;

  return (
    <div>
      <h3>List of Phone Words for the number: </h3>
      {Object.keys(data).map(key => (
        <Badge bg='secondary' key={id++}>
          {data[key]}
        </Badge>
      ))}
    </div>
  );
}

export default PhonewordsResults;
