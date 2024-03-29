import React, { useState } from 'react';
import "./ExpenseModal.css"
import Modal from "react-modal"
import { enqueueSnackbar } from 'notistack';

Modal.setAppElement("#root")

const ExpenseModal = ({isOpen,isClose,setExpense,setList,setWallet}) => {

 
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
  setWallet(newWalletAmount)
 
 }

 const expenseListHandler = ()=>{
  let expenseList = JSON.parse(localStorage.getItem("expenseList"))
  let newExpenseList = [...expenseList,expenseData]

  setList(newExpenseList)

    
  const message = "new expense added successfully "
  enqueueSnackbar(message,{variant:"success"})
 }


 const expenseAmountHandler = ()=>{

  let usedAmount = expenseData.price
  let WalletAmount = Number(localStorage.getItem("walletAmount"))


  if(usedAmount > WalletAmount){
    const message = "expense amount cant be more than wallet amount. So upgrade your wallet amount"
     enqueueSnackbar(message,{variant:"error"})
  }else{

    
  let expenseAmount =Number(localStorage.getItem("expenseAmount"))
  let newExpenseAmount = expenseAmount+Number(usedAmount)
  
  setExpense(newExpenseAmount)
  walletAmountHandler()
  expenseListHandler()

  }

 }






 const addProduct=()=>{
   
  expenseAmountHandler()

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
