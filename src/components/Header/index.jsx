import './Header.css';

import logo from '../../assets/argentBankLogo.png';
import { Link } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";


import { useSelector } from 'react-redux'

function Header() {
    const isLogged = useSelector((state) => state.auth).logged

    const UserLogout = () => {
        localStorage.clear()
        useSelector((state) => state.auth)
    }
    
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
                        <FaCircleUser /> <span className='header-user-name'>Tony</span>
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