import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {logoutAction} from '../../store/actions/authActions';

const Navbar = ({loggedIn, setLoggedIn}) => {
    const dispatch = useDispatch();
    const handleLogoutEvent = () => {
        dispatch(logoutAction());
        setLoggedIn('');
    }
    return (
        <nav className="deep-purple accent-2">
            <div className="nav-wrapper">
               <div className="container">
                    <span  className="brand-logo">spectre</span>
                        {loggedIn? (
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><Link to="/home"><i className="fas fa-home"></i> Home</Link></li>
                                <li><Link to="/teams"><i className="fas fa-users"></i> Teams</Link></li>
                                <li><Link to="/boards"><i className="fas fa-border-none"></i> Boards</Link></li>
                                <li><Link to="/templates"><i className="fas fa-puzzle-piece"></i> Templates</Link></li>
                                <li onClick={handleLogoutEvent}><Link><i className="fas fa-sign-out-alt"></i> Logout</Link></li>
                            </ul> 
                        ) : (
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><Link to="/home"><i className="fas fa-home"></i>Home</Link></li>
                                <li><Link to="/register">SignUp</Link></li>
                                <li><Link to="/login">Login</Link></li>
                            </ul>
                        )}
               </div>
            </div>
        </nav>
    )
}

export default Navbar;