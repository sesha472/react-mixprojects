import React, { useState } from "react";

const Userformdata = () => {
  const [userdata, setuserdata] = useState({
    fname: "",
    lname: "",
    email: "",
    contact: "",
    gender: "",
    interests:[],
    subject: "",
    resume: "",
    url: "",
    about: "",
  });


  const inputChangeHandler = (e) => {
    setuserdata({ ...userdata, [e.target.name]: e.target.value });
  };

    const chechboxHandler=(e)=>{
       if(e.target.checked){
        setuserdata((prvstate)=>(
          {...prvstate,interests:[...prvstate.interests,e.target.value]}
        ))
       }else{
        setuserdata((prvstate)=>({
          ...prvstate,interests:prvstate.interests.filter((item)=>item!==e.target.value)
        }))
       }
       
    }
  
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userdata);
  };








  return (
    <div className="bg-gray-500  flex items-center justify-center "
    >
      <form
        onSubmit={submitHandler}
        className=" bg-white p-10  max-w-md  shadow-[1px_3px_6px_black] rounded-lg "
      >
        <label className=" block mb-4">
          <span className="text-lg font-semibold ">First Name</span>
          <input
            type="text"
            name="fname"
            onChange={inputChangeHandler}
            className="mt-1 block w-full border border-pink-200 rounded-md p-2 outline-none "
          />
        </label>

        <label className=" block mb-4 ">
          <span className="text-lg font-semibold">Last Name</span>
          <input
            type="text"
            name="lname"
            onChange={inputChangeHandler}
            className="mt-1 block w-full border border-pink-200 rounded-md p-2 outline-none"
          />
        </label>

        <label className="block mb-4">
          <span className="text-lg font-semibold">Email</span>
          <input
            type="email"
            name="email"
            onChange={inputChangeHandler}
            className="w-full p-2 mt-2 border border-pink-200  rounded-md outline-none "
          />
        </label>

        <label className="block mb-4">
        <span className="text-lg font-semibold">Contact</span>
          <input
            type="tel"
            name="contact"
            onChange={inputChangeHandler}
            className="border border-pink-200 w-full p-2 mt-2 rounded-md outline-none"
          />
        </label>

        <div className="space-y-5">


          {/* Radio Buttons */}
          <label className="block mb-4">

            <span className="text-lg font-semibold text-pink-700">Gender</span>

            <div className="mt-2 flex items-center space-x-6">
              
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={inputChangeHandler}
                  className=" h-5 w-5 border border-pink-400 rounded focus:bg-pink-500 appearance-none "
                />
                <span className="ml-2 text-gray-700">Male</span>
              </label>

              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={inputChangeHandler}
                    className=" appearance-none h-5 w-5 border border-pink-400 rounded focus:bg-pink-500"
/>
                <span className="ml-2 text-gray-700">Female</span>
              </label>

              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="others"
                  onChange={inputChangeHandler}
                  className=" appearance-none h-5 w-5 border border-pink-400 rounded focus:bg-pink-500"
                />
                <span className="ml-2 text-gray-700">Others</span>
              </label>
            </div>


          </label>

          {/* Checkboxes */}
          <label className="block mb-4">
            <span className="text-lg font-semibold text-gray-800">
              Interests
            </span>
            <div className="mt-2 flex items-center space-x-6">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="interests"
                  value="sports"
                  onChange={chechboxHandler}
                  className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">Sports</span>
              </label>

              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="interests"
                  value="music"
                  onChange={chechboxHandler}
                  className="form-checkbox h-5 w-5 text-purple-500 border-gray-300 focus:ring-purple-500"
                />
                <span className="ml-2 text-gray-700">Music</span>
              </label>

              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="interests"
                  value="Travel"
                  onChange={chechboxHandler}
                  className="form-checkbox h-5 w-5 text-green-500 border-gray-300 focus:ring-green-500"
                />
                <span className="ml-2 text-gray-700">Travel</span>
              </label>
            </div>
          </label>
        </div>

        



        
        <select
          name="subject"
          onChange={inputChangeHandler}
          className="block w-full p-2 my-4 border border-pink-300 rounded-md outline-none hover:bg-slate-100 "
        >
          <option value="math">Math</option>
          <option value="science">Science</option>
          <option value="english">English</option>
          <option value="telugu">Telugu</option>
        </select>





        <label>
          chose resume file
          <input type="file" name="resume" onChange={inputChangeHandler} 
          className="w-full p-2  rounded-md border border-pink-200 hover:bg-slate-50 "
          />
        </label>
        <label> 
          <span className="block mt-4">URL link</span>
          <input type="url" name="url" onChange={inputChangeHandler} 
           className="border-pink-200 border w-full p-2 mt-1 rounded-md outline-none"
          />
        </label>

        <label>
          <span className="block text-lg font-semibold mt-4">About</span>
          <textarea
            type="textarea"
            name="about"
            onChange={inputChangeHandler}
            className="bg-pink-50 w-full  border border-pink-200 outline-purple-200 "
          />
        </label>
        <span className="flex justify-center">
        <button type="submit" className="mt-4 w-1/2  bg-violet-400 p-1  rounded font-semibold shadow-xl hover:bg-slate-500 hover:shadow-[1px_1px_3px_1px_black] ">Submit</button>
      
        </span>
        </form>
    </div>
  );
};

export default Userformdata;
