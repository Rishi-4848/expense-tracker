import React from 'react';
import "./Expenses.css"

const Expenses = () => {
  return (
    <div className='expenses-wrapper'>
       <div className='expenses-amount'>
        <p>Expenses: <span>₹0</span></p>
       </div>

       <button className='expenses-btn'>+ Add Expense</button>
    </div>
  );
}

export default Expenses;
