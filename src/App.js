import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Keyboard from './components/Keyboard';
import Screen from './components/Screen';

function App() {
  return (
    <div className='App'>
      <Screen />
      <Keyboard />
    </div>
  );
}

export default App;
