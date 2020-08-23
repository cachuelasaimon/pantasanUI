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
import Dashboard from './components/Dashboard/dashboard'



function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Dashboard />
      </Provider>
    </div>
  );
}

export default App;
