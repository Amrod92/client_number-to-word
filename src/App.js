import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Keyboard from './components/Keyboard';
import Screen from './components/Screen';
import PhonewordsResults from './components/PhonewordsResults';

function App() {
  return (
    <div className='App'>
      <div>
        <Screen />
        <Keyboard />
        <PhonewordsResults />
      </div>
    </div>
  );
}

export default App;
