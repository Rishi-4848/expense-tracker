import React, { useEffect, useState } from 'react';
import "./Expenses.css"

const Expenses = ({openModal,expense,setExpense}) => {

  

  useEffect(()=>{
    let newExpenseAmount = Number(localStorage.getItem("expenseAmount")) 
    setExpense(newExpenseAmount)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className='expenses-wrapper'>
       <div className='expenses-amount'>
        <p>Expenses: <span>₹{expense}</span></p>
       </div>

       <button className='expenses-btn' onClick={openModal}>+ Add Expense</button>
    </div>
  );
}

export default Expenses;
