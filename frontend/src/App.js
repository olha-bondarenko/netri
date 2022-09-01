import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Navbar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <Router>
       <Container maxWidth='xl'>
       <Navbar/>
       <Routes>
         <Route path="/" element={<Navigate to="posts" />}/>
         <Route path="/posts" element={<Home />}/>
         <Route path="/posts/search" element={<Home />}/>
         <Route path='/posts/:id' element={<PostDetails />}/>
         <Route path='/signin' element={ !user ? <Auth /> : <Navigate to="/posts"/>}/>
       </Routes>
      </Container>
    </Router>
  )
}

export default App;