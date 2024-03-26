import React from 'react';
import "./Expenses.css"

const Expenses = ({openModal}) => {
  return (
    <div className='expenses-wrapper'>
       <div className='expenses-amount'>
        <p>Expenses: <span>₹0</span></p>
       </div>

       <button className='expenses-btn' onClick={openModal}>+ Add Expense</button>
    </div>
  );
}

export default Expenses;
