import React, { useState } from 'react';
import "./ExpenseModal.css"
import Modal from "react-modal"

Modal.setAppElement("#root")

const ExpenseModal = ({isOpen,isClose}) => {

 
 const [expenseData,setExpenseData] = useState({
   title:"",
   price:0,
   category:"food",
   date:"",
 })


 const changeHandler = (e)=>{
  setExpenseData({...expenseData,[e.target.name]:e.target.value})
 }


 const walletAmountHandler = ()=>{

  let WalletAmount = Number(localStorage.getItem("walletAmount"))
  let usedAmount = expenseData.price
  let newWalletAmount = WalletAmount - usedAmount
  
  localStorage.setItem("walletAmount",newWalletAmount)
 }


 const expenseAmountHandler = ()=>{

  let usedAmount = expenseData.price
  let expenseAmount =Number(localStorage.getItem("expenseAmount"))
  let newExpenseAmount = expenseAmount+Number(usedAmount)

  localStorage.setItem("expenseAmount",newExpenseAmount)
 }


 const expenseListHandler = ()=>{
  let expenseList = JSON.parse(localStorage.getItem("expenseList"))
  let newExpenseList = [...expenseList,expenseData]

  localStorage.setItem("expenseList",JSON.stringify(newExpenseList))
 }



 const addProduct=()=>{
   
  expenseListHandler()
  expenseAmountHandler()
  walletAmountHandler()

   setExpenseData({
    title:"",
    price:0,
    category:"food",
    date:"",
  })

   isClose()
 }


  return (

       <Modal className="modal-wrapper" isOpen={isOpen} onRequestClose={isClose} >
      <div className='expense-input-container'>
        <p>Add Expenses</p>
         <div className='expense-input-details'>
          <input type="text" name="title" value={expenseData.title} onChange={changeHandler}/>
          <input type="text" name="price" value={expenseData.price} onChange={changeHandler} />
         </div>
         <div className='expense-input-dates'>
          <select name="category" value={expenseData.category} onChange={changeHandler}>
            <option value="food">food</option>
            <option value="entertainment">entertainment</option>
            <option value="travel">travel</option>
          </select>

          <input type="date" name="date" value={expenseData.date}  onChange={changeHandler}/>
         </div>
         <div className='expense-input-btns'>
          <button className='add-expense-btn' onClick={addProduct}>Add Expense</button>
          <button onClick={isClose}>Cancel</button>
         </div>
      </div>
    </Modal>
  );
}

export default ExpenseModal;
