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

  const initialWalletAmount = 5000;
  const initialexpenseList = []
  const initialexpenseAmount = 0

  let walletAmount = Number(localStorage.getItem("walletAmount"))
  let expenseAmount = Number(localStorage.getItem("expenseAmount"))
  let expenseList = JSON.parse(localStorage.getItem("expenseList"))
  
  const [wallet,setWallet] = useState(walletAmount===0? initialWalletAmount:walletAmount)
  const [expense,setExpense] = useState(expenseAmount)
  const [list,setList] = useState(expenseList===null ? initialexpenseList : expenseList)
  const [isExpenseModalOpen,setIsExpenseModalOpen] = useState(false)
  const [isWallletModalOpen,setIsWalletModalOpen] = useState(false)
  const [isEditModalOpen,setIsEditModalOpen] = useState(false)
  const [editExpenseInfo,setEditExpenseInfo] = useState(null)



  useEffect(()=>{

    if(localStorage.getItem("walletAmount")===null){
      localStorage.setItem("walletAmount",initialWalletAmount)
    }

    if(localStorage.getItem("expenseList")===null){
       localStorage.setItem("expenseList",JSON.stringify(initialexpenseList))
    }

    if(localStorage.getItem("expenseAmount")=== null){
      localStorage.setItem("expenseAmount",initialexpenseAmount)
    }

  },[])






useEffect(()=>{
  localStorage.setItem("walletAmount",wallet)
},[wallet])

  useEffect(()=>{
    localStorage.setItem("expenseAmount",expense)
  },[expense])

  useEffect(()=>{
    localStorage.setItem("expenseList",JSON.stringify(list))
 },[list])
 

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
     <Wallet openModal={openWalletModal} setWallet={setWallet} wallet={wallet}/>
     <Expenses expense={expense} setExpense={setExpense} openModal={openExpenseModal} setWallet={setWallet}/>

     <div style={{width:250, height:250}}>
     <Piechart list={list}/>
     </div>
    
     </div>

     <div className='homepage-footer'>
   <ExpensesList openModal={openEditModal} setExpense={setExpense} setEditExpenseInfo={setEditExpenseInfo} list={list} setList={setList} setWallet={setWallet}/>
    <div className='bar-container' >
    <Barchart list={list}/>
    </div>
   
     </div>

     <ExpenseModal isOpen={isExpenseModalOpen} isClose={closeExpenseModal} setExpense={setExpense} setWallet={setWallet} setList={setList}/>
     <WalletModal isOpen={isWallletModalOpen} isClose={closeWalletModal} setWallet={setWallet}/>
     {isEditModalOpen && <EditModal isOpen={isEditModalOpen} isClose={closeEditModal} setExpense={setExpense} editExpenseInfo={editExpenseInfo} setWallet={setWallet} setList={setList}/>}
     
    </div>
  );
}

export default HomePage;
