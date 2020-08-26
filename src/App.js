// Sample //
// import Navbar from './components/sample/navbar';
// import SampleComponents from './components/sample/sampleComponent'

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

// Redux
import { Provider } from 'react-redux'
import Store from "./store"

// UI 
import Dashboard from './components/Dashboard(overlay)/dashboard'

// Theme Provider 
import { ThemeProvider } from 'styled-components'
import {Theme} from './components/themes/theme'


function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <ThemeProvider theme={Theme}>
          <Dashboard />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
