import React from 'react';
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="app">
    <Header />
    

    <Router>
   
    <div className="app__body">
    <Sidebar />
    <Routes>
    
      
      <Route path="/" element={<Home />} />
      <Route path="/rooms/:roomId" element={<Chat />} />
  
    </Routes>
  
    </div>
    
    </Router>  
    
    </div>
  );
}

export default App;
