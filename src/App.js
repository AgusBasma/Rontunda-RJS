import './App.css';
import logo from './assets/logo512.png';
import Header from './components/header';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Header />

      <Navbar>
        <CartWidget />
      </Navbar>
      <ItemListContainer />
      asa
{     /*<header className="App-header"> /*
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
  </header>*/ }
    </div>
  );
}

export default App;
