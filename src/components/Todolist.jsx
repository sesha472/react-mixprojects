

import React, { useState } from "react"

const Todolist =() =>{

    const [todo, settodo] = useState("");
    const [todos, settodos] = useState([])

    const inputchangeHnalder=(e)=>{
        settodo(e.target.value)
             
    }

    const addtodohandler=()=>{
        settodos( [...todos,todo])
        settodo("")
        
    }

     const delethandler=(index)=>{
       const newcopytodos=[...todos];
         newcopytodos.splice(index,1)
         settodos(newcopytodos);
     }
    return(
        <>
           {todos.map((item,index)=>{
            return (<li  key={index}>
                {item}  
             <button onClick={()=> delethandler(index)}>delet</button>

            </li>)
          })} 
        <input type="teact" 
        placeholder="enter todo "
         value={todo}  
        onChange={inputchangeHnalder}
        onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addtodohandler();
            }
          }}
      
        />
        <button onClick={addtodohandler}>addtodo</button>
        </>
    )
}

export default Todolist;