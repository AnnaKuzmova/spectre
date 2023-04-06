import React, {useState} from 'react';
import './index.css';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Teams from './components/Teams/Teams';
import CreateTeam from './components/Teams/CreateTeam';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Profile from './components/Profile/Profile';
import Board from './components/Board/Board';
import Dashboard from './components/Board/Dashboard';
import Templates from './components/Templates/Templates';
import {BrowserRouter, Route} from 'react-router-dom';
import Reports from './components/Report/Report';


function App()  {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token'));
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <Route path="/home" component={Home} />
          <Route exact path="/register" render={(props) => (
            <Register {...props} setLoggedIn={setLoggedIn} />
          )} />
          <Route exact path="/login" render={(props) => (
            <Login {...props} setLoggedIn={setLoggedIn} />
          )} />
          <ProtectedRoute loggedIn={loggedIn} exact path='/teams' component={Teams} />
          <ProtectedRoute loggedIn={loggedIn} exact path='/boards' component={Board} />
          <ProtectedRoute loggedIn={loggedIn} exact path='/teams/create' component={CreateTeam} />
          <ProtectedRoute loggedIn={loggedIn} exact path='/boards/:id' component={Dashboard}/>
          <ProtectedRoute loggedIn={loggedIn} exact path='/templates' component={Templates}/>
          <ProtectedRoute loggedIn={loggedIn} exact path='/reports' component={Reports}/>
        </div>
      </BrowserRouter>
    );
}

export default App;
