import React from 'react';
import Home from './Expense/Home';
import ExpenseEnt from './Expense/ExpenseEnt';
import {Route,Routes} from "react-router-dom"

function Section() {
  return (
    <section>

      <Routes>
         <Route path="/home" element={<Home/>}  />
         <Route path="/ExpenseEnt" element={<ExpenseEnt/>}  />
      </Routes>

    </section>
  )
}

export default Section
