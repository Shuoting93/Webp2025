//import logo from './logo.svg';
import './App.css';
import MultiButton from './cgu_multiButton'
import HelloCGU from './HelloCGU';
import CGU_Login from './cgu_login';



function App() {
  return (
    <div className="App">
      <div>
        {CGU_Login()}
      </div>
    </div>
  );
}

export default App;
