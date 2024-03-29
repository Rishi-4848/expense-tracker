import React from 'react';
import "./ListItem.css";
import { CiPizza, CiGift } from "react-icons/ci";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { enqueueSnackbar } from 'notistack';

const ListItem = ({openModal,expense,setEditExpenseInfo,setList,setExpense,setWallet}) => {

  const editHandler = ()=>{

    setEditExpenseInfo(expense)
    openModal()
  }


  const expenseListHandler = (selected)=>{

    let expenseList = JSON.parse(localStorage.getItem("expenseList"))

    let newList = expenseList.filter((expense)=>
     !(selected.title === expense.title && expense.category === selected.category && selected.price === expense.price && selected.date === expense.date))

     setList(newList)
  }


  const expenseAmountHandler = (selected)=>{
    let expenseAmount = localStorage.getItem("expenseAmount")

    let newAmount = Number(expenseAmount) - Number(selected.price)

    setExpense(newAmount)
  }


  const walletAmountHandler = (selected)=>{
     
    let walletAmount = localStorage.getItem("walletAmount") 

    let newWalletAmount = Number(walletAmount) + Number(selected.price)

    setWallet(newWalletAmount)
  }



  const deleteHandler = (selected)=>{
         
    expenseListHandler(selected)
    
    expenseAmountHandler(selected)

    walletAmountHandler(selected)
    
    const message  = "expense deleted successfully"
    enqueueSnackbar(message,{variant:"success"})
  }

  return (
    <div className='listitem-wrapper'>

       <div className='listitem-content'>
        {expense.category === "food" && ( <CiPizza className='img-icons category-icon'/>)}
       {expense.category === "entertainment" && ( <CiGift className='img-icons category-icon'/>)}
       {expense.category === "travel" && ( <FaPersonWalkingLuggage className='img-icons category-icon'/>)}
        

         <div className='listitem-details'>
         <p>{expense.title}</p>
         <p>{expense.date}</p>
         </div>
       </div>

       <div className='listitem-btns'>
           <p>{expense.price}</p>
      <MdDelete className='img-icons delete-icon' onClick={()=>{deleteHandler(expense)}}/>
      <CiEdit className='img-icons edit-icon' onClick={editHandler}/>
       </div>
    </div>
  );
}

export default ListItem;
