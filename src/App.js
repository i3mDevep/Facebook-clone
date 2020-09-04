import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from './components/Feed'
import Widges from './components/Widges'
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widges />
      </div>
    </div>
  );
}

export default App;
