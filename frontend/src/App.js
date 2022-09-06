import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Navbar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  let hashHistory = Router.hashHistory;
  return (
    <Router history={hashHistory}>
       <Container maxWidth='xl'>
       <Navbar/>
       <Routes>
         <Route path="/" exact element={<Navigate to="posts" />}/>
         <Route path="/posts" exact element={<Home />}/>
         <Route path="/posts/search" exact element={<Home />}/>
         <Route path='/posts/:id' exact element={<PostDetails />}/>
         <Route path='/signin' exact element={ !user ? <Auth /> : <Navigate to="/posts"/>}/>
       </Routes>
      </Container>
    </Router>
  )
}

export default App;