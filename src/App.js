import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Home from './components/Home';
import Account from './components/Account';
import Login from './components/Login';

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;