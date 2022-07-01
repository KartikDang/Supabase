import react, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Supabase } from './../../supabase';
import './signup.css';
import { createClient } from '@supabase/supabase-js'
import { useUserSession } from '../../context/AuthContext';


const SUPABASE_URL = "https://pamxlmbyqavhkmibugsb.supabase.co"
const SERVICE_KEY = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(SUPABASE_URL, SERVICE_KEY);

export default function Register() {


  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(email.current.value, password.current.value);
    try {
      const { user, error } = await supabase.auth.signUp({ email, password });
      if (error) {
        alert(error.message);
        console.log(error);
      }
      else {
        console.log(user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const {user} = useUserSession();
  console.log(user);

  return (

    <div className="wrapper">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form action="/" onSubmit={handleLogin}>
        <h3>Sign-Up</h3>

        <label for="username">Username</label>
        <input type="text" name="" id="username" placeholder='Email or Phone' value={email} onChange={(e) => setEmail(e.target.value)} />

        <label for="password">Password</label>
        <input type="password" name="" id="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="login" type="submit">Sign Up</button>
        <button className='create'><a href='/'>Login into your Account</a></button>
      </form>


    </div>
  )
}