import React from "react";
import "./App.css";
import SignIn  from './loginpage/SignIn'
//import SignOut  from './loginpage/SignOut'
import ChatBot from './chatbot/ChatBot'


import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
      <Routes>
        <Route path="" element={<SignIn />} />
        <Route path="/chatbot" element={<ChatBot />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;