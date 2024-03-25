import React from 'react';
import "./Wallet.css"

const Wallet = () => {
  return (
    <div className='wallet-wrapper'>
       <div className='wallet-amount'>
        <p>Walllet Balance: <span>₹5000</span></p>
       </div>

       <button className='wallet-btn'>+ Add Income</button>
    </div>
  );
}

export default Wallet;
