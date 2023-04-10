import logo from './logo.svg';
import './App.css';
import Aligin from './components/Aligin';
import Secound from './components/secound/Secound';
import First from './components/first/First';
function App() {
  return (
    <div className="App">
      <Aligin  />
      <First text={{
        age:'23',
        name:'aktan'
      }}/>
<Secound text={{
        age:'23',
        name:'aktan'
      }}/>

    </div>
  );
}

export default App;
