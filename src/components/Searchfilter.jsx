import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const Searchfiletr = () => {
  const [username, setusername] = useState([]);
  const [searchedvaluedata, setsearchedvaluedata] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setusername(res.data),
      setsearchedvaluedata(res.data);
    });
  });

  const serachHAndler = (e) => {
    setsearchedvaluedata(
      username.filter((item) => {
        return item.name.toLowerCase().includes(e.target.value);
      })
    );
  };

  return (
    <div>
      <input className=" p-2 m-4 rounded-lg w-full border-4 outline-none border-red-700 " type="text" placeholder="serach..." onChange={serachHAndler} />
      <table className=" m-2 border-8 border-yellow-200 w-full shadow-[1px_2px_10px_black] rounded-lg ">
        <thead className="text-zinc-100 ">
          <tr  className="py-2 bg-slate-500 ">
            <th>id</th>
            <th>name</th>
            <th>website</th>
            <th>email</th>
          </tr>
        </thead>

        {searchedvaluedata.map((item) => {
          return (
            <tbody key={item.id}>
              <tr>
                <td  className="py-2 bg-stone-300 ">{item.id}</td>
                <td>{item.name}</td>
                <td  className="py-2 bg-stone-300 ">{item.website}</td>
                <td>{item.email}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Searchfiletr;
