import React from 'react';
import  { useEffect, useState } from 'react';
import "./Piechart.css";
import {Pie} from "react-chartjs-2";
import Chart from 'chart.js/auto';

const Piechart = ({list}) => {


  let travelAmount = 0;
  let foodAmount = 0;
  let entertainmentAmount = 0;
 
   list.map((item)=>(
     item.category === "food"? foodAmount += Number(item.price):"" ))
 
     list.map((item)=>(
       item.category === "travel"? travelAmount += Number(item.price):"" ))
 
       list.map((item)=>(
         item.category === "entertainment"? entertainmentAmount += Number(item.price):"" ))


                 
 let data = [
  {
    category : "food",
    price : foodAmount,
   },
   {
     category : "entertainment",
     price : entertainmentAmount,
   },
   {
     category : "travel",
     price : travelAmount,
   }
 ]

 const [chartData,setChartData] = useState({
  labels: data.map((item)=> item.category),
  datasets:[{
    label : "money spent",
    data: data.map((item)=> item.price),
    backgroundColor:["orange","yellow","green"],
  }]
})


const defaultData = {
  labels: data.map((item)=> item.category),
  datasets:[{
    label : "money spent",
    data: [0,0,0]
  }]
}


  return (
    <Pie data={list.length===0 ? defaultData: chartData}/>
  );
}

export default Piechart;
