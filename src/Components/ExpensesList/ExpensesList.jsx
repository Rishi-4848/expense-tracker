import React, { useEffect, useState } from 'react';
import "./ExpensesList.css"
import ListItem from '../ListItem/ListItem';
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";

const ExpensesList = ({openModal,setEditExpenseInfo,setList,list,setExpense,setWallet}) => {
  
const [currentPage,setCurrentPage] = useState(1)

const itemsPerPage =3

let expenseList = JSON.parse(localStorage.getItem("expenseList"))

let totalPages

if(expenseList===null){
  totalPages =0
}else{
  totalPages = expenseList.length <=2  ? 1 : Math.ceil(expenseList.length/itemsPerPage)
}



const startIndex = (currentPage-1)*itemsPerPage

const endIndex = startIndex + itemsPerPage




const handleNextPage = ()=>{
  setCurrentPage(currentPage+1)
}


const handlePrevPage = ()=>{
   setCurrentPage(currentPage-1)
}



 useEffect(()=>{

  let expenseList = JSON.parse(localStorage.getItem("expenseList"))

  setList(expenseList)

 },[])



  return (
    <div className='expensesList-wrapper'>
      <h1>Recent Transactions :</h1>
      
      <div className='expensesList-list'>
      {list.length !==0 ? (   
          list.slice(startIndex,endIndex).map((expense,i)=>(  
            <>
              <ListItem key={i}  openModal={openModal} expense={expense} setEditExpenseInfo={setEditExpenseInfo} setList={setList} setExpense={setExpense} setWallet={setWallet}/>
              <hr />
              </>
          ))
      ):(<div className='expensesList-nolist'>Add New Expenses ...!</div>)}
      </div>

      <div className='pagination-container'>
       <button  onClick={handlePrevPage} disabled={currentPage===1}><FaAngleLeft className='page-btns'/></button>
      <button className='page-btns'>{currentPage}</button>
       <button  onClick={handleNextPage} disabled={currentPage===totalPages}><FaAngleRight className='page-btns'/></button>
      </div>

    </div>
  );
}

export default ExpensesList;
