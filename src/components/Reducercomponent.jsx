// import React, { useReducer } from "react";

// const intialstate = { counter: 0 };

// const INCRIMENT = "incriment";
// const DICRIMENT = "dicriment";
// const RESET = "reset";

// const reducerfunHandler = (prvstate, action) => {
//   switch (action.type) {
//     case INCRIMENT:
//       return { ...prvstate, counter: prvstate.counter + 1 };
//     case DICRIMENT:
//       return { ...prvstate, counter: prvstate.counter - 1 };
//     case RESET:
//       return { counter: 0 };
//     default:
//       return prvstate;
//   }
// }; 

// const Reducercomponent = () => {
//   const [state, dispatch] = useReducer(reducerfunHandler, intialstate);

//   return (
//     <>
//       <p>value is : {state.counter}</p>
//       <button onClick={() => dispatch({ type: INCRIMENT })}>incriment </button>
//       <button onClick={() => dispatch({ type: DICRIMENT })}>dicriment </button>
//       <button onClick={() => dispatch({ type: RESET })}>dicriment </button>
//     </>
//   );
// };

// export default Reducercomponent;



import React, {  useReducer, useState } from "react";

const intialstate = {
  loading: false,
  data: null,
  error: null,
};

const reducerfun = (prvstate, action) => {
  switch (action.type) {
    case "loading":
      return { ...prvstate, loading: true, error: false };
    case "start":
      return { ...prvstate, loading: false, data: action.payload };
    case "error":
      return { ...prvstate, loading: false, error: action.payload };
    default:
      return prvstate;
  }
};

const Reducercomponent = () => {
  const [shadoweffect, setshadoweffect] = useState(false);

  const [state, dispatch] = useReducer(reducerfun, intialstate);

  const getinguserdata = async () => {
    try {
      dispatch({ type: "loading" });
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();
      // console.log(result);
      dispatch({ type: "start", payload: result });
    } catch (error) {
      // console.log("the error is : "+error);
      dispatch({ type: "error", payload: error });
    }
  };

  // useEffect(() => {
  //   console.log(getinguserdata());
  //   // getinguserdata()
  // }, []) 
  
     
    const shadowbox = shadoweffect ? 
    "0px 0px 10px black":"0px 0px 50px pink" ;

  return (
    <div className="reducercomponent">
      <button onClick={getinguserdata} style={{marginBottom:"30px"}}>click to get data </button>
      {console.log(state)} 

      {state.loading && <p>loading...</p>}
      {state.data && (
        <div style={{ borderRadius:"30px",padding:"20px",display:"flex",flexDirection:"column",alignItems:"center", boxShadow:shadowbox}}
        onMouseEnter={()=>{setshadoweffect(true)}}
         onMouseLeave={()=>{setshadoweffect(false)}} >
          {" "}
          {state.data.map((item, index) => {
            return <li style={{backgroundColor:"pink",margin:"5px",width:"300px" ,display:"flex",justifyContent:"center"}} key={item.id}>{item.name}</li>;
          })}
        </div>
      )}
      {state.error && <p>error</p>}
    </div>
  );
};

export default Reducercomponent;

// import React, { useEffect, useReducer } from "react";

// const intialstate = {
//   loading: false,
//   data: null,
//   error: null,
// };px

// // action types

// const FETCH_INIT = "FETCH_INIT";
// const FETCH_START = "FETCH_START";
// const FETCH_ERROR = "FETCH_ERROR";

// const reducerfun = (state, action) => {
//   switch (action.type) {
//     case FETCH_INIT:
//       return { ...state, loading: true, error: null };
//     case FETCH_START:
//       return { ...state, loading: false, data: action.payloaddata };
//     case FETCH_ERROR:
//       return { ...state, loading: false, error: action.payloaddata };

//     default:
//       return state;
//   }
// };

// const Reducercomponent = () => {
//   const [state, dispatch] = useReducer(reducerfun, intialstate);

//   const userdetailsHandler = async () => {
//     try {
//       dispatch({ type: FETCH_INIT });
//       const res = await fetch("https://jsonplaceholder.typicode.com/users");
//       const result = await res.json();
//       dispatch({ type: FETCH_START, payloaddata: result });
//     } catch (error) {
//       dispatch({ type: FETCH_ERROR, payloaddata: error });
//     }
//   };

// //   useEffect(() => {
// //      console.log(userdetailsHandler());

// //   }, [])

//   return (
//     <>
//       <h1>usereducer function impliment practice</h1>
//       <button onClick={userdetailsHandler}>click to get userdetails usereducer</button>
//       {state.loading && <h1>loading...</h1>}
//       {state.data &&<div>
//         {state.data.map((item, index) => <li key={item.id}>{item.name}</li>)}

//       </div>}
//       {state.error && <p>error</p>}
//     </>
//   );
// };

// export default Reducercomponent;
