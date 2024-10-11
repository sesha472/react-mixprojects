


  import React, { useState } from 'react'
  
  const Userformdata = () => {
     const [userdata, setuserdata] = useState({
        fname:"",
        lname:"",
        email:"",
        contact:"",
        gender:"",
        subject:"",
        resume:"",
        url:"",
        about:""
     })
    
      const inputChangeHandler=(e)=>{
        setuserdata({...userdata,[e.target.name]:e.target.value})
      }
      const submitHandler=(e)=>{
         e.preventDefault();
          console.log(userdata)
      }
    return (
      <div div className='bg-gray-500  min-h-screen flex items-center '>
        <form onSubmit={submitHandler} className=' bg-white p-10 max-w-md  ' >
         
          <label className=' block mb-4'>
          <span className="text-gray-700">First Name</span>
            <input type="text" name="fname" onChange={inputChangeHandler}
   className="mt-1 block w-full border border-pink-200 rounded-md p-2 outline-none" />
          </label>

          <label className=' block mb-4'>

            lname
            <input type="text" name="lname" onChange={inputChangeHandler} 
   className="mt-1 block w-full border border-pink-200 rounded-md p-2 outline-none" />
          </label>

          <label className='block mb-4'>
            email
            <input type="email" name="email" onChange={inputChangeHandler}
              className=' mt-1 block border border-pink-300 p-2 w-full rounded-md outline-none '
            />
          </label>
          <label>
            contact
            <input type="tel" name="contact" onChange={inputChangeHandler} />
          </label>

          <label>
            gender
            <input
              type="radio"
              name="gender"
              value={"male"}
              onChange={inputChangeHandler}
            />
            male
            <input
              type="radio"
              name="gender"
              value={"female"}
              onChange={inputChangeHandler}
            />
            female
            <input
              type="radio"
              name="gender"
              value={"others"}
              onChange={inputChangeHandler}
            />
            others
          </label>

            <select name='subject' onChange={inputChangeHandler}>subject
                <option value="math">Math</option>
                <option value="science">science</option>
                <option value="english">english</option>
                <option value='telugu'>telugu</option>
            </select>
            
             <label>
                chose resume file 
                <input type='file' name='resume'  onChange={inputChangeHandler} />
             </label>
             <label>
             <input  type="url"  name='url' onCanPlay={inputChangeHandler} />
             </label>

             <label>about 
                <textarea type='textarea' name='about' onChange={inputChangeHandler} />
             </label>
             <button type='submit'>submit</button>
        </form>
      </div>
    );
}
  
  export default Userformdata
  
