import {React,useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


const Signup = () => {
              const [name,setName]= useState("");
              const [email,setEmail]= useState("");
              const [password,setPassword]= useState("");
              const navigate = useNavigate();


            
              useEffect(()=>{
                const auth = localStorage.getItem('user');
                if(auth){
                      navigate('/')
                }
              })

              const collectData= async ()=>{
                console.warn(name,email,password)
                let result = await fetch('http://localhost:5000/register',{
                 method:'POST',
                 body: JSON.stringify({name,email,password}),
                 headers: {
                  'Content-Type':'application/json'
                 },
                })
               result = await result.json();
               console.warn(result);
               localStorage.setItem("user",JSON.stringify(result))
                navigate('/')
               
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
