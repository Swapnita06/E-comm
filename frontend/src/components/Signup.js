import {React,useState} from 'react'

const Signup = () => {
              const [name,setName]= useState("");
              const [email,setEmail]= useState("");
              const [password,setPassword]= useState("");
              const collectData=()=>{
                console.warn(name,email,password)
              }


  return (
    <div className='register'>
      <h1>REGISTER</h1>
      <input  className="inputbox" type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter name'/>
      <input className="inputbox"  type='text' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email'/>
      <input className="inputbox"  type='text' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password'/>
       <button onClick={collectData} className='appbutton' type="button">Sign Up</button>
    </div>
  )
}

export default Signup
