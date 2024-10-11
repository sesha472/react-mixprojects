






       import React, { useState } from 'react'
       
       const Componentssection = () => {
        const [selctedoptionvalue, setselctedoptionvalue] = useState('');
        
        const sectionHandler=(e)=>{
              setselctedoptionvalue(e.target.value)
        }
         
         return (
           <div> 
            <select value={selctedoptionvalue} onChange={sectionHandler} >
                <option  >chose_value</option>
                <option value="india" >india</option>
                <option value="america">america</option>
                <option value="aus" >aus</option>
                <option value="canada">canada</option>
           
            </select>    
           </div>
         )
       }
       
       export default Componentssection
       