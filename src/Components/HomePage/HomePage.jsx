import React, { useEffect, useState } from 'react';
import "./HomePage.css"
import Wallet from '../Wallet/Wallet';
import Expenses from '../Expenses/Expenses';
import Piechart from '../Piechart/Piechart';
import ExpensesList from '../ExpensesList/ExpensesList';
import Barchart from '../Barchart/Barchart';
import ExpenseModal from '../ExpenseModal/ExpenseModal';
import WalletModal from '../WalletModal/WalletModal';
import EditModal from '../EditModal/EditModal';

const HomePage = () => {

  const [isExpenseModalOpen,setIsExpenseModalOpen] = useState(false)
  const [isWallletModalOpen,setIsWalletModalOpen] = useState(false)
  const [isEditModalOpen,setIsEditModalOpen] = useState(false)
  const initialWalletAmount = 5000;
  const expenseList = []
  const expenseAmount = 0

  useEffect(()=>{

    if(localStorage.getItem("walletAmount")===null){
      localStorage.setItem("walletAmount",initialWalletAmount)
    }

    if(localStorage.getItem("expenseList")===null){
       localStorage.setItem("expenseList",JSON.stringify(expenseList))
    }

    if(localStorage.getItem("expenseAmount")=== null){
      localStorage.setItem("expenseAmount",expenseAmount)
    }
  },[])
 

  const closeEditModal =()=>{
    setIsEditModalOpen(false)
   }

   const openEditModal = ()=>{
    setIsEditModalOpen(true)
   }


  const closeExpenseModal =()=>{
    setIsExpenseModalOpen(false)
   }

   const openExpenseModal = ()=>{
    setIsExpenseModalOpen(true)
   }

   const closeWalletModal =()=>{
    setIsWalletModalOpen(false)
   }

   const openWalletModal = ()=>{
    setIsWalletModalOpen(true)
   }


  return (
    <div className='homepage-wrapper'>

      <h1>Expense Tracker</h1>

     <div className='homepage-header'>
     <Wallet openModal={openWalletModal}/>
     <Expenses openModal={openExpenseModal}/>
     <Piechart/>
     </div>

     <div className='homepage-footer'>
   <ExpensesList openModal={openEditModal}/>
   <Barchart/>
     </div>

     <ExpenseModal isOpen={isExpenseModalOpen} isClose={closeExpenseModal}/>
     <WalletModal isOpen={isWallletModalOpen} isClose={closeWalletModal}/>
     <EditModal isOpen={isEditModalOpen} isClose={closeEditModal}/>
    </div>
  );
}

export default HomePage;
