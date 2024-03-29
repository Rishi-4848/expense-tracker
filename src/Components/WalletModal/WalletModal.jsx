import React, { useState } from 'react';
import "./WalletModal.css"
import Modal from "react-modal"
import { enqueueSnackbar } from 'notistack';

Modal.setAppElement("#root")

const WalletModal = ({isOpen,isClose,setWallet}) => {


   const [walletAmount,setWalletAmount] = useState(0)


   const changeHandler = (e)=>{
    setWalletAmount(e.target.value)
   }

   const AddAmount = ()=>{
    let oldAmountStr = localStorage.getItem("walletAmount")
    let newAmount = Number(oldAmountStr) + Number(walletAmount)
    setWallet(newAmount)

      const message = `wallet top up succesfully of ${walletAmount}`
    enqueueSnackbar(message,{variant:"success"})
    
    isClose()
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
