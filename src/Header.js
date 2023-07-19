import React from 'react'
import { Link } from 'react-router-dom';
import'./css/Header.css';

function Header() {
  return (
    <div>

      <nav>
      <h2>Expense Tracker</h2>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/ExpenseEnt">Expense Details</Link></li>
      </nav>
    </div>
  )
}

export default Header
