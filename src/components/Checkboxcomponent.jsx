// import React, { useState } from "react";

// const Checkboxcomponent = () => {
//   const [checkedItems, setCheckedItems] = useState({
//     cricket: false,
//     baseball: false,
//     tennis: false,
//     shuttle: false,
//     football: false,
//   });

//   // Handler for checkbox changes
//   const handleCheckboxChange = (e) => {
//     const { name, checked } = e.target;
//     setCheckedItems((prevState) => ({
//       ...prevState,
//       [name]: checked,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Filtering only checked sports
//     console.log(Object.keys(checkedItems));
    
//     const selectedSports = Object.keys(checkedItems).filter(
//       (item) => checkedItems[item]
      
//     );
//     console.log("Selected sports:", selectedSports);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//          <label>
//             <input
//              type="checkbox"
//              name="cricket"
//              checked={checkedItems.cricket}
//              onChange={handleCheckboxChange}
//             />
//             cricket
//          </label>
//         </div>

//         <div>
//           <label>
//             <input
//               type="checkbox"
//               name="baseball"
//               checked={checkedItems.baseball}
//               onChange={handleCheckboxChange}
//             />
//             Baseball
//           </label>
//         </div>

//         <div>
//           <label>
//             <input
//               type="checkbox"
//               name="tennis"
//               checked={checkedItems.tennis}
//               onChange={handleCheckboxChange}
//             />
//             Tennis
//           </label>
//         </div>

//         <div>
//           <label>
//             <input
//               type="checkbox"
//               name="shuttle"
//               checked={checkedItems.shuttle}
//               onChange={handleCheckboxChange}
//             />
//             Shuttle
//           </label>
//         </div>

//         <div>
//           <label>
//             <input
//               type="checkbox"
//               name="football"
//               checked={checkedItems.football}
//               onChange={handleCheckboxChange}
//             />
//             Football
//           </label>
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Checkboxcomponent;


import React, { useEffect, useState } from 'react'
const items = ["Sports", "Cricket", "Football", "Tennis", "Shuttle"];
const Checkboxcomponent = () => {
    const [checkboxselecteditems, setcheckboxselecteditems] = useState([]);
   
   
    const  chechboxHAnlder=(e)=>{
       if(e.target.checked){
        setcheckboxselecteditems((prvstate)=>(
          [...prvstate,e.target.value]
        ))
       }else {
        setcheckboxselecteditems((prvstate)=>(
          prvstate.filter((item)=>item!==e.target.value)
        ))
       }
    

   } 
        useEffect(() => {
          console.log(checkboxselecteditems);  
        }, [checkboxselecteditems])
        
  return (
    <div>
      <h1>this is check box test</h1>
      {items.map(item=>(
        <div key={item}>
        <label >
        <input type='checkbox' name={item} value={item} onChange={chechboxHAnlder} />
        {item}
        </label>
        </div>
      ))}
       
        {checkboxselecteditems.map(item=>(
          <p>{item}</p>
        ))}
    </div>
  )
}

export default Checkboxcomponent




// import { useState } from "react";
// const arr=["Apple", "Orange", "Banana"]
// export default function Checkboxcomponent() {
//   const [fruitsArr, setFruitsArr] = useState([...arr]);
//   const [chkBoxStates, setChkBoxStates] = useState(arr.map(()=>false));

//   const deleteClickHandler = (index) => {
//     alert(index);
//     const filteredArr = [];
//     for (let i = 0; i < fruitsArr.length; i++) {
//       if (i !== index) filteredArr.push(fruitsArr[i]);
//     }
//     setFruitsArr(filteredArr);
//   };

//   const handleCheck = (isChecked, index) => {
//     setChkBoxStates((prevArray) => {
//       const newArray = [...prevArray]; // create a new array based on the previous state array
//       newArray[index] = isChecked; // modify the element at the specified index
//       return newArray; // return the new array as the updated state value
//     });
//   };
//   return (
//     <div className="">
//       <h1>Hello Codeandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       {fruitsArr.map((element, index) => {
//         return (
//           <div key={index}>
//             <input
//               type="checkbox"
//               onChange={(e) => handleCheck(e.target.checked, index)}
//             ></input>{" "}
//             &nbsp;&nbsp;
//             {element} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//             {chkBoxStates[index] && (
//               <button onClick={() => deleteClickHandler(index)}>Delete</button>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// }