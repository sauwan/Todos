import React,{ useState } from "react";


const Try=()=>{
    const[inputValue,setInputValue]=useState('');
    const[items,setItems]=useState([]);

const itemEvent=(event)=>{
    setInputValue(event.target.value);
}

const listOfItems=()=>{
setItems((oldItems)=>{
    return [...oldItems,inputValue];
})
setInputValue("");
}

const delItem = (index) => {
    setItems((oldItems) => {
      return oldItems.filter((item, i) => {
        return i !== index;
      });
    });
  };
  
return <>
<div className="main_div">
    <div>
        <h3 >TODOS</h3>
<input type="text"  placeholder="Enter Item" onChange={itemEvent}
value={inputValue} />
<button onClick={listOfItems}>Add</button>

<br/>
{/* <ol><li>{inputValue}<button>Del</button></li></ol> */}
{items.map((obj, index) => {
  return (
    <div key={index}>
      <li>{obj}</li>
      <button onClick={() => delItem(index)}>Delete</button>
    </div>
  );
})}

</div>
</div>
</>
}

export default Try;