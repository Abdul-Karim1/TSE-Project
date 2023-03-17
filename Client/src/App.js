import './App.css';
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Home from './pages/Home';
import Menu from './pages/Menu';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Contact from './pages/Contact';
import About from './pages/About';
import Dashboard from './pages/dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useReducer } from 'react';

import { initialState, reducer } from './reducers/userReducers';
//ContextAPI
export const UserContext = createContext();
const Routing = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router >
    </div >
  );
}

const App = () => {  //main func 
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Routing />
      </UserContext.Provider>
    </>
  )
}
export default App;