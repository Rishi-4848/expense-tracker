import React, { useState } from 'react';
import "./EditModal.css";
import Modal from "react-modal"
import { enqueueSnackbar } from 'notistack';

Modal.setAppElement("#root")

const EditModal = ({isOpen,isClose,editExpenseInfo,setExpense,setWallet,setList}) => {

  const selectedExpense = {...editExpenseInfo}



  const [editData,seteditData] = useState({...selectedExpense})

  const changeHandler = (e)=>{

   seteditData((prev)=>({...prev,[e.target.name]:e.target.value}))

  }


  const expenseListHandler = ()=>{

    let expenseList = JSON.parse(localStorage.getItem("expenseList"))

    let newList = expenseList.filter((expense)=>
     !(expense.title === editExpenseInfo.title && expense.category === editExpenseInfo.category && editExpenseInfo.price === expense.price))

     newList.push(editData)

     setList(newList)
  }


  const expenseAmountHandler = ()=>{
    let expenseAmount = localStorage.getItem("expenseAmount")

    let newAmount = Number(expenseAmount) - Number(editExpenseInfo.price)  + Number(editData.price)
  
    setExpense(newAmount)
  }

  const walletAmountHandler = ()=>{
    let walletAmount = localStorage.getItem("walletAmount") 

    let newWalletAmount = Number(walletAmount) + Number(editExpenseInfo.price) - Number(editData.price)

    setWallet(newWalletAmount)

  }
 
  
  const editProduct=()=>{
      
    expenseListHandler()
      
    expenseAmountHandler()

    walletAmountHandler()

  const message = "expense updated successfully"

    enqueueSnackbar(message,{variant:"success"})
   
      isClose()
  }


  return (
    
    <Modal className="modal-wrapper" isOpen={isOpen} onRequestClose={isClose} >
    <div className='edit-input-container'>
      <p>Edit Expense</p>
       <div className='edit-input-details'>
        <input type="text" name="title" value={editData.title} onChange={changeHandler}/>
        <input type="text" name="price" value={editData.price} onChange={changeHandler} />
       </div>
       <div className='edit-input-dates'>
        <select name="category" value={editData.category} onChange={changeHandler}>
          <option value="food">food</option>
          <option value="entertainment">entertainment</option>
          <option value="travel">travel</option>
        </select>

        <input type="date" name="date" value={editData.date}  onChange={changeHandler}/>
       </div>
       <div className='edit-input-btns'>
        <button className='add-btn' onClick={editProduct}>Add Expense</button>
        <button onClick={isClose}>Cancel</button>
       </div>
    </div>
  </Modal>
  );
}

export default EditModal;
