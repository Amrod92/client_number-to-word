import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    <div className='App'>
      <div>
        <Keyboard onGettingData={gettingData} />
        <PhonewordsResults data={dataList} />
      </div>
    </div>
  );
}

export default App;
