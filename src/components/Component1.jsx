  



//   updating json array values 


import React, { useState } from 'react'

const Component1 = () => {
     const [items, setitems] = useState([
        {id:1,name:"item1"},
        {id:2,name:"item2"},
        {id:3,name:"item3"},
        {id:4,name:"item4"},
     ]);
          const updateitemHandler=(idarg,namearg)=>{
          const updateditems=items.map((item)=>item.id === idarg ?{...item,name:namearg}:item)
              setitems(updateditems);
          
          }
  return (
    <div>
      <h1 className='text-3xl text-white text-center py-3 rounded bg-blue-800 my-2  '>UPDATING ITEMS </h1>

      <ul className="space-y-4 p-5 bg-white rounded-lg shadow-lg">
        {items.map((item) => (
          <li
            className="flex justify-between items-center p-4 bg-slate-200 rounded-lg shadow-sm hover:bg-slate-300 transition duration-300 ease-in-out"
            key={item.id}
          >
            <span className="text-lg font-medium text-slate-700">
              {item.name}
            </span>
            
           
          </li>
        ))}
      </ul>
      {items.map((item) => (
        <button
          key={item.id}
          class="bg-stone-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded m-2"
          onClick={()=>updateitemHandler(item.id,`updated newname ${item.name}`)}
       >
          Button{item.id}
        </button>
      ))}
    </div>
  );
}

export default Component1

