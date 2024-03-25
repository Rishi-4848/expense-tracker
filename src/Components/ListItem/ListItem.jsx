import React from 'react';
import "./ListItem.css";
import { CiPizza, CiGift } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const ListItem = () => {
  return (
    <div className='listitem-wrapper'>

       <div className='listitem-content'>
         <CiPizza className='img-icons category-icon'/>
         <div className='listitem-details'>
         <p>samosa</p>
         <p>02-12-2024</p>
         </div>
       </div>

       <div className='listitem-btns'>
           <p>150</p>
      <MdDelete className='img-icons delete-icon'/>
      <CiEdit className='img-icons edit-icon'/>
       </div>
    </div>
  );
}

export default ListItem;
