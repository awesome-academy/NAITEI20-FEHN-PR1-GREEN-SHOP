import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Outlet } from 'react-router-dom';
import Comment from './components/Comment';
function App() {

  return (
    <div className="">
      {/* app */}
      <Comment />
    </div>

  )
}

export default App
