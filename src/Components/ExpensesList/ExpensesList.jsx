import React from 'react';
import "./ExpensesList.css"
import { CiPizza, CiGift } from "react-icons/ci";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import ListItem from '../ListItem/ListItem';

const ExpensesList = () => {
  return (
    <div className='expensesList-wrapper'>
      <h1>Recent Transactions :</h1>

      <div className='expensesList-list'>
         <ListItem/>
         <ListItem/>
         <ListItem/>
         <ListItem/>
         
      </div>
    </div>
  );
}

export default ExpensesList;
