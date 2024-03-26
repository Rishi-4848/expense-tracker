import React from 'react';
import "./Wallet.css"

const Wallet = ({openModal}) => {
  return (
    <div className='wallet-wrapper'>
       <div className='wallet-amount'>
        <p>Walllet Balance: <span>₹5000</span></p>
       </div>

       <button className='wallet-btn' onClick={openModal}>+ Add Income</button>
    </div>
  );
}

export default Wallet;
