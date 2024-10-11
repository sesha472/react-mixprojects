

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
        <div className="flex flex-col items-center min-h-screen bg-gray-800 p-6">
  
  {/* Todos List Section */}
  <div className="bg-neutral-600 mb-4 rounded-lg shadow-lg w-full max-w-md p-4">
    {todos.map((item, index) => (
      <div key={index} className="bg-slate-500 m-3 p-4 rounded-md">
        <ul className="list-none">
          <li className="flex justify-between items-center">
            <span className="text-white">{item}</span>
            <button
              className="rounded-[4px] bg-red-950 text-white px-2 py-1 hover:bg-red-700 transition duration-200"
              onClick={() => delethandler(index)}
            >
              Delete
            </button>
          </li>
        </ul>
      </div>
    ))}
  </div>

  {/* Add Todo Section */}
  <div className="bg-cyan-700 p-5 rounded-md w-full max-w-md shadow-lg">
    <div className="flex items-center">
      <input
        className="ml-2 bg-slate-500 border border-slate-400 text-white px-2 py-1 rounded flex-grow"
        type="text"
        placeholder="Enter todo"
        value={todo}
        onChange={inputchangeHnalder}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addtodohandler();
          }
        }}
      />
      <button
        className="bg-gray-700 text-white px-4 py-1 ml-2 rounded hover:bg-gray-600 transition duration-200"
        onClick={addtodohandler}
      >
        ADD TODO
      </button>
    </div>
  </div>
</div>

    )
}

export default Todolist;