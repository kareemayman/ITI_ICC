import logo from './logo.svg';
import Link from './Link.js'
import './App.css';
import TestEvents from './TestEvents.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Link/> */}
        <TestEvents/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
