import React, { useEffect, useState } from 'react';
import "./Expenses.css"

const Expenses = ({openModal}) => {

 const [expense,setExpense] = useState(0)

  let expenseAmount = localStorage.getItem("expenseAmount")

  useEffect(()=>{
    let newExpenseAmount = JSON.parse(localStorage.getItem("expenseAmount"))
    setExpense(newExpenseAmount)
  },[expenseAmount])

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
