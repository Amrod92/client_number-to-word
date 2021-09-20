import React from 'react';
import Form from 'react-bootstrap/Form';
import './Screen.css';

function Screen(props) {
  return (
    <div className='screen'>
      <span className='screen-text-container'>
        {/* Screen to display text */}
        <Form>
          <Form.Group className='mb-3'>
            <Form.Text className='text-muted'>1-{props.typeNumber}</Form.Text>
          </Form.Group>
        </Form>
      </span>
    </div>
  );
}

export default Screen;
