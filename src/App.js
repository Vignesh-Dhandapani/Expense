import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header.js';
import Section from './Section.js';



function App() {
 
  // Function to add new expense to the list
 
  return (
    <div>
      <Router>
        <Header/> 
        <Section/>
      </Router>
    </div>
  )
}

export default App
