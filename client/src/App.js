import React from 'react';
import './App.css';
import logo from './logo.svg';

function App() {

    function testBackend() {
        fetch('/api/test')
            .then((res) => console.log(res));
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo}
                     className="App-logo"
                     alt="logo"/>
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

                <button onClick={testBackend}>Test BE</button>
            </header>
        </div>
    );
}

export default App;
