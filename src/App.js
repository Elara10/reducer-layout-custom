import './App.css';
import React from 'react';
import useLocalStorage from "./hooks/useLocalstorage";

function App() {
//  const [name,setName]=useState(
//   localStorage.getItem('username')?
//   localStorage.getItem('username'):''
//  );

//  useEffect(()=>{
//   localStorage.setItem('username',name)
//  },[name])
const[name,setName]=useLocalStorage('username','')
const[id,setId]=useLocalStorage('id','')

  
  return (
    <>
      <input type="text" placeholder="Enter your name" 
      value={name} onChange={(e)=>
       setName(e.target.value)}></input>
      <h1>Hello,{name}</h1>
      <input type="text" placeholder="Enter your email" 
      value={id} onChange={(e)=>
       setId(e.target.value)}></input>
      <h1>Your Id:{id}</h1>
     </>
  );
}

export default App;
