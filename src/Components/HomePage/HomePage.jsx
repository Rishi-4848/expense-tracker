import React from 'react';
import "./HomePage.css"
import Wallet from '../Wallet/Wallet';
import Expenses from '../Expenses/Expenses';
import Piechart from '../Piechart/Piechart';
import ExpensesList from '../ExpensesList/ExpensesList';
import Barchart from '../Barchart/Barchart';

const HomePage = () => {
  return (
    <div className='homepage-wrapper'>

      <h1>Expense Tracker</h1>

     <div className='homepage-header'>
     <Wallet/>
     <Expenses/>
     <Piechart/>
     </div>

     <div className='homepage-footer'>
   <ExpensesList/>
   <Barchart/>
     </div>
    </div>
  );
}

export default HomePage;
