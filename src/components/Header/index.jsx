import './Header.css';

import logo from '../../assets/argentBankLogo.png';
import { Link } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { userGetProfile } from '../../features/user/userActions'

function Header() {
    const isLogged = useSelector((state) => state.auth).logged;
    const { loading, user, error } = useSelector((state) => state.user)
    const dispatch = useDispatch();

    const UserLogout = () => {
        localStorage.clear()
        useSelector((state) => state.auth)
    }

    const token = localStorage.getItem('userToken')

    useEffect(() => {
        if(user == null) {
            dispatch(userGetProfile(token))
        }
    }, [user, dispatch, token])
    
    return(
        <nav>
            <Link className='nav-logo' to={"/"}>
                <img src={logo} alt="Argent Bank's logo"/>
            </Link>

            { !isLogged && (
                <div className='signin-container'>
                    <Link to={"/login"} className='nav-login'>
                        <FaCircleUser /> Sign In
                    </Link>
                </div>
            )}

            { isLogged && (
                <div className='signout-container'>
                    <Link className='nav-login' to={"/profile"}>
                        {
                            (user != null) && (
                                <span><FaCircleUser /> <span className='header-user-name'>{user.firstName}</span></span>
                            )
                        } 
                    </Link>
                    <Link className='nav-login' to={"/"} onClick={UserLogout}>
                        <FaSignOutAlt /> Sign Out
                    </Link>
                </div>
            )}
        </nav>    
    )
}

export default Header