import React, { useState } from 'react'

const Getuserdetails = () => {
  const [data, setdata] = useState([])


const getdataHanlder= async()=>{
  try {
    const response= await fetch('https://jsonplaceholder.typicode.com/users')
  const result =await response.json()
  console.log(result);
  
       setdata(result)
  } catch (error) {
    console.log("the error is " +error);
    
  }
  
      
}
  
  return (
    <>  <div>Getuserdetails</div>
    <button onClick={getdataHanlder}>click to get data</button>
     {data.map((item,index)=>(
      <li key={item.id}>{item.name}</li>
     ))}
    </>
   )
}

export default Getuserdetails