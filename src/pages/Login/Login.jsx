import './Login.css';
import { FaCircleUser } from "react-icons/fa6";

import { useForm } from 'react-hook-form'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../features/auth/authActions'
//userInfo = reponse requete api
function Login() {
    const { loading, userInfo, error } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    useEffect(() => {
        if (userInfo) {
            navigate('/profile')
        }
    }, [navigate, userInfo])
  
    const submitForm = (data) => {
        console.log(data)
        console.log(userInfo)
        console.log(dispatch(userLogin(data)))
        dispatch(userLogin(data))
    }

    return(
        <main className='mainLogin main-bg'>
            <section>
                <FaCircleUser />
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit(submitForm)}>
                    <div className='input-wrapper'>
                        <label htmlFor='username'>Username</label>
                        <input type="email" id='username' required {...register("email")}/>
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' required {...register("password")}/>
                    </div>
                    <div className='remember-wrapper'>
                        <input type='checkbox' id='remember-me' />
                        <label htmlFor='remember-me'>Remember me</label>
                    </div>
                    <div className='loading'>
                        {
                            loading && (
                                <p className="loader"></p>
                            )
                        }
                    </div>
                    <div className='error-message'>
                        {
                            error && (
                                <p>{error}</p>
                            )
                        }
                    </div>
                    <button className='sign-in-button green-button'>Sign In</button>
                </form>
            </section>
        </main>
    )
}

export default Login