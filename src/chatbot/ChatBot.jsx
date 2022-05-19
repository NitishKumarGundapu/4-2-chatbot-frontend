import React from "react";

import config from "./config";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";

import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';

import './main.css'

function App() {
    return (
      <div className="App">
        <div style={{ maxWidth: "300px" }}>
          <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
        </div>
      </div>
    );
  }

export default App