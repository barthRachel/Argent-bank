import './Header.css';

import logo from '../../assets/argentBankLogo.png';
import { Link } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";

function Header() {
    
    
    return(
        <nav>
            <Link className='nav-logo' to={"/"}>
                <img src={logo} alt="Argent Bank's logo"/>
            </Link>

            <div>
                <Link to={"/login"} className='nav-login'>
                    <FaCircleUser /> Sign In
                </Link>
            </div>
        </nav>    
    )
}

export default Header