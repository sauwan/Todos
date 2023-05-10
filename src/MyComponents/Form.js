import React from "react";
import { useState } from "react";

function Form(){

// const[sno,setSno] = useState('');
// const[title,setTitle]=useState('');
// const[description,setDescription]=useState('');
const[formdata,setFormdata]=useState({sno:'',title:'',description:''});
const[myArray,setMyArray]=useState([]);

const HandleSubmit =(event)=>{
    event.preventDefault();
   

 localStorage.setItem("formdata",JSON.stringify(formdata));

  

//    console.log(formdata.title);
//    console.log(formdata.description);
    

}

return(
    <>
    <form onSubmit={HandleSubmit}>
        <label>Sno:
        <input type="number" value={formdata.sno} onChange={(event)=>setFormdata({...formdata,sno:event.target.value})}/>
        </label>
    
       
        <label>Title:
        <input type="text" value={formdata.title} onChange={(event)=>setFormdata({...formdata,title:event.target.value})}/>
        </label>

        <label>Description:
        <input type="text" value={formdata.description} onChange={(event)=>setFormdata({...formdata,description:event.target.value})}/>
        </label>

        <button type="submit">Add</button>
        </form>
    </>
);
}
export default Form;