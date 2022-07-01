import React, { useEffect, useState } from 'react';
import { useRef, useContext } from 'react';
import { Supabase } from './../../supabase';
import './Auth.css';
import { createClient } from '@supabase/supabase-js'
import { UserContext, useUserSession } from './../../context/AuthContext';


const SUPABASE_URL = "https://pamxlmbyqavhkmibugsb.supabase.co"
const SERVICE_KEY = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(SUPABASE_URL, SERVICE_KEY);

export default function Authpage() {
  const { logIn } = useUserSession();
  // const [msg , setmsg] = useContext(UserContext);
  // console.log(msg);
  const { user } = useUserSession();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(email.current.value, password.current.value);
    try {
      const { user, error } = await supabase.auth.signIn({ email, password });
      if (error) {
        alert(error.message);
        console.log(error);
      }
      else {
        console.log(user);
        logIn(user.id);

        let { data, error } = await supabase
        .from('team_users')
        .select('team')
        .eq('user', user.id);
    if (error) {
        alert(error.message);
    }
    else {
        // console.log(data[0].team);
        const team = data[0].team;

        try {
            const { data, error } = await supabase.from('team_users').select('user').eq('team', team);
            // console.log(data);  Team Members Details

            data.map(async (e) => {
                //console.log(e.user); Team Member Ids
                let { data, error } = await supabase
                    .from('posts')
                    .select("*")
                    .eq('id', e.user);
                console.log(data);
            })
        } catch (error) {
            console.log(error);
        }
    }
      }
    } catch (error) {
      console.log(error);
    }
  }




  return (

    <div className="wrapper">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleLogin} action="/post" >
        <h3></h3>

        <label for="username">Username</label>
        <input type="text" name="" id="username" placeholder='Email or Phone' value={email} onChange={(e) => setEmail(e.target.value)} />

        <label for="password">Password</label>
        <input type="password" name="" id="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="login" type="submit">Log In</button>

        <button className='create'><a href='/signup'>Create New Account</a></button>

      </form>
    </div>
  )
}