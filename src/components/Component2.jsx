



import React, { useState } from 'react'
const countries = [
    { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
    { name: "AMERICA", value: "USA", cities: ["NEW YORK", "CALIFORNIYA"] },
    { name: "CANADA", value: "CA", cities: ["Dhaka", "Chittagong"] },
  ];
const Component2 = () => {
    const [countriesindexvalue, setcountriesindexvalue] = useState('')
      
    const [selectedcity, setselectedcity] = useState()
   
    return (
    <div>
         {/* selecting countrys  */}
         <select value={countriesindexvalue} onChange={(e)=>setcountriesindexvalue(e.target.value)} >
            <option value=''>--chose country--</option>
         {countries.map((county,index)=>(
            <option value={index} key={index}>{county.name}</option>
         ))}
         </select>
           
           {/* selecting cities  */}
           {countriesindexvalue !== '' && (
              <select value={selectedcity} onChange={(e)=>setselectedcity(e.target.value)}>
              <option value=''>--chose cite</option>
          {countries[countriesindexvalue].cities.map((cite,index)=>(
                  <option value={cite} key={index} >{cite}</option>
          ))}
         </select>
           )}
               

               {countriesindexvalue !==''&&selectedcity  &&(
                <h1>selected countries is <b> {countries[countriesindexvalue].name} </b> and cite is <b> {selectedcity} </b> </h1>
               )}


    </div>
  )
}

export default Component2
