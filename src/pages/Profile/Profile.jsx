import './Profile.css';
import BalanceBloc from '../../components/BalanceBloc/BalanceBloc';


import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { userGetProfile } from '../../features/auth/authActions'

function Profile() {
    const balance_info = [
        {
            title: "Argent Bank Checking (x8349)",
            amount: "2,082.79"
        },
        {
            title: "Argent Bank Savings (x6712)",
            amount: "10,928.42"
        }, 
        {
            title: "Argent Bank Credit Card (x8349)",
            amount: "184.30"
        }
    ]

/*     const { loading, userInfo, error } = useSelector((state) => state.auth)
    const dispatch = useDispatch();


    useEffect(() => {
        const token = localStorage.getItem('userToken')
        console.log(token)
        dispatch(userGetProfile(token))
    }) */

    return(
        <main className='main-bg'>
            <section className='header-profile'>
                <h1>Welcome back<br/><span className='userName'>Tony Jarvis</span>!</h1>
                <button className='edit-button'>Edit Name</button>
            </section>

            <section className='header-profile editMode hidden'>
                <h1>Welcome back</h1>
                <div className='editMode-container'>
                    <div className='editMode-wrapper'>
                        <input type='text' id='firstName' placeholder='Tony' />
                        <button className='edit-button save'>Save</button>
                    </div>
                    <div className='editMode-wrapper'>
                        <input type='text' id='lastName' placeholder='Jarvis' />
                        <button className='edit-button cancel'>Cancel</button>
                    </div>
                </div>
            </section>

            {
                balance_info.map((infos, index) => (
                    <BalanceBloc
                        key={`${infos.title}-${index}`}
                        title={infos.title}
                        amount={infos.amount}
                    />
                ))
            }

        </main>
    )
}

export default Profile