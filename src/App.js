import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Home from './components/Home';
import Account from './components/Account';
import Login from './components/Login';
import AuthContext from './utils/authContext';
import { useState, useEffect } from 'react';
import Cookie from "js-cookie"
import jwtDecode from 'jwt-decode';

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const token = Cookie.get("token")
    if(token) {
      const currentUser = jwtDecode(token)
      setUser(currentUser)
    }
  }, [])
  return (
    <div className="app">
      <AuthContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;