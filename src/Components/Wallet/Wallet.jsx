import React, { useEffect, useState } from 'react';
import "./Wallet.css"

const Wallet = ({openModal}) => {

  const [wallet,setWallet] = useState(0)

  let wallletAmount = localStorage.getItem("walletAmount") 

  useEffect(()=>{
    let wallletAmountstr = localStorage.getItem("walletAmount") 

    let walletAmount = Number(wallletAmountstr)
    setWallet(walletAmount)
  },[wallletAmount])



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
