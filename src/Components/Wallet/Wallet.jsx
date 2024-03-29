import React, { useEffect, useState } from 'react';
import "./Wallet.css"

const Wallet = ({openModal,wallet}) => {


  return (
    <div className='wallet-wrapper'>
       <div className='wallet-amount'>
        <p>Walllet Balance: <span>₹{wallet}</span></p>
       </div>

       <button className='wallet-btn' onClick={openModal}>+ Add Income</button>
    </div>
  );
}

export default Wallet;
