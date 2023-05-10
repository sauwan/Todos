import React from 'react';

const TodoItem = () => {
 let datas=JSON.parse(localStorage.getItem("datasss"));
 
 let fdatas = JSON.parse(localStorage.getItem("formdata"));
  return (
   <>
   
  <p>{fdatas.sno}</p>
  <h3>{fdatas.title}</h3>
  <p>{fdatas.description}</p>

{datas.map((curVal)=>{
    return <table>
      <thead>
        <tr>
        <th>Sno</th>
        <th>Title</th>
        <th>Description</th>
        </tr>

        
      </thead>
      <tbody>
      {datas.map((curVal)=>{
    return  <tr key={curVal.sno}>
    <td>{curVal.sno}</td>
    <td>{curVal.Title}</td>
    <td>{curVal.Description}</td>
    
  </tr>
   })}
       
      </tbody>
    </table>
   })}




   </>
  );
};

export default TodoItem;
