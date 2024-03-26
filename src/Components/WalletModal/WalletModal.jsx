import React, { useState } from 'react';
import "./WalletModal.css"
import Modal from "react-modal"

Modal.setAppElement("#root")

const WalletModal = ({isOpen,isClose}) => {


   const [walletAmount,setWalletAmount] = useState(0)


   const changeHandler = (e)=>{
    setWalletAmount(e.target.value)
   }

   const AddAmount = ()=>{
     console.log(walletAmount)
   }

  return (
    <Modal className="wallet-modal-wrapper" isOpen={isOpen} onRequestClose={isClose}>
    
      <div className='wallet-input-container'>
        <p>Add Balance</p>

        <div className='wallet-modal-input'>
          
          <input type="number" name="amount" onChange={changeHandler}/>
        <button className='add-btn' onClick={AddAmount}>
          Add Balance
        </button>
        <button onClick={isClose}>
          Cancel
        </button>
        </div>
      </div>
      
    </Modal>
  );
}

export default WalletModal;
