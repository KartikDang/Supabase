import logo from './logo.svg';
import './App.css';
import Authpage from './components/Auth/Auth';
import Register from './components/SignUp/signup';
import { useContext, useMemo, useState } from 'react';
import { UserContext, userLoginContext } from './context/AuthContext';
import Posts from './components/Teams/newTeam';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import Postspage from './components/Posts_Tab/posts';

function App() {

  
  const [user, setUser]=useState(null);
  console.log(user);
  function logIn(userrecd){
    setUser(userrecd);
  }

  return (
    <userLoginContext.Provider value={{user , logIn}} >
      {/* <Navbar props={user}/> */}
      <Router>
        <Routes>
          <Route path="/" element={user?<Postspage  props={user}/> : <Authpage />} /> 
          <Route path="/signup" element={<Register />} />
        </Routes>
      </Router>
      
    </userLoginContext.Provider>
  );
}

export default App;
