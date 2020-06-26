import React from 'react'
import logo from './logo.svg'
import './reset.css'
import { Navbar } from './components'
import { ThemeProvider } from 'styled-components';
import theme from './shared/theme';

function App () {
  return (
    <ThemeProvider theme={theme}>

      <div className="App">
        <Navbar/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Edit <code>src/App.tsx</code> and save to reload.
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

    </ThemeProvider>
  )
}

export default App
