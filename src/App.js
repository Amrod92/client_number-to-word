import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/UI/Navbar';
import Footer from './components/UI/Footer';
import Keyboard from './components/Keyboard';
import PhonewordsResults from './components/PhonewordsResults';

function App() {
  const [dataList, setDataList] = useState({});
  const gettingData = data => {
    const saveData = {
      ...data
    };
    setDataList(saveData);
  };

  return (
    <>
      <Navbar />
      <div className='App'>
        <p style={{ marginLeft: '15px', marginTop: '10px', fontSize: '30px' }}>
          Use the keypad below to enter the phone number (2-9) with a maximim
          length of 7 digits.
        </p>
        <div className='keypad'>
          <Card className='keypad-card'>
            <Card.Header>
              <strong>Phoneword</strong>
            </Card.Header>
            <Card.Body>
              <Keyboard onGettingData={gettingData} />
            </Card.Body>
          </Card>
        </div>
        <div className='phoneword-results'>
          <PhonewordsResults data={dataList} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
