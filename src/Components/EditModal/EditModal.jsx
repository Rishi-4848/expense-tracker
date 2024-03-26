import React, { useState } from 'react';
import "./EditModal.css";
import Modal from "react-modal"

Modal.setAppElement("#root")

const EditModal = ({isOpen,isClose}) => {

  const [editData,seteditData] = useState({
    title:"",
    price:"",
    category:"",
    date:"",
  })
 
  const changeHandler = (e)=>{
   seteditData({...editData,[e.target.name]:e.target.value})
  }
 
 
  const addProduct=()=>{
   console.log(editData)
  }


  return (
    
    <Modal className="modal-wrapper" isOpen={isOpen} onRequestClose={isClose} >
    <div className='edit-input-container'>
      <p>Edit Expense</p>
       <div className='edit-input-details'>
        <input type="text" name="title" value={editData.title} onChange={changeHandler}/>
        <input type="text" name="price" value={editData.price} onChange={changeHandler} />
       </div>
       <div className='edit-input-dates'>
        <select name="category" value={editData.category} onChange={changeHandler}>
          <option value="food">food</option>
          <option value="entertainment">entertainment</option>
          <option value="travel">travel</option>
        </select>

        <input type="date" name="date" value={editData.date}  onChange={changeHandler}/>
       </div>
       <div className='edit-input-btns'>
        <button className='add-btn' onClick={addProduct}>Add Expense</button>
        <button onClick={isClose}>Cancel</button>
       </div>
    </div>
  </Modal>
  );
}

export default EditModal;
