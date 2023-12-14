import './Profile.css';
import BalanceBloc from '../../components/BalanceBloc/BalanceBloc';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { userGetProfile } from '../../features/user/userActions'
import { editProfile } from '../../features/edit/editActions';

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

    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch();
    
    const token = localStorage.getItem('userToken')

    useEffect(() => {
        if(user == null) {
            dispatch(userGetProfile(token))
        }
    }, [user, dispatch, token])

    const editMode = () => {
        document.querySelector('.editMode').classList.toggle('hidden');
        document.querySelector('.normalMode').classList.toggle('hidden');

        document.querySelector('#firstName').value = "";
        document.querySelector('#lastName').value = "";
    }

    const saveChange = () => {
        const firstnameValue = document.querySelector('#firstName').value;
        const lastnameValue = document.querySelector('#lastName').value;

        let isFirstnameSet, isLastnameSet;

        firstnameValue === "" ? isFirstnameSet = false : isFirstnameSet = true;
        lastnameValue === "" ? isLastnameSet = false : isLastnameSet = true;

        if(isFirstnameSet && isLastnameSet) {
            const userEdit = {
                token: token,
                firstName : firstnameValue,
                lastName : lastnameValue
            }
            dispatch(editProfile(userEdit))
            editMode()
        }
    }

    return(
        <main className='main-bg'>
            <section className='header-profile normalMode'>
                {
                    (user != null) && (
                        <h1>Welcome back<br/><span className='userName'>{user.firstName} {user.lastName}</span>!</h1>
                    )
                }
                <button className='edit-button' onClick={editMode}>Edit Name</button>
            </section>

            <section className='header-profile editMode hidden'>
                <h1>Welcome back</h1>
                <div className='editMode-container'>
                    <div className='editMode-wrapper'>
                        <input type='text' id='firstName' placeholder={user ? user.firstName : ""} />
                        <button className='edit-button save' onClick={saveChange}>Save</button>
                    </div>
                    <div className='editMode-wrapper'>
                        <input type='text' id='lastName' placeholder={user ? user.lastName : ""} />
                        <button className='edit-button cancel' onClick={editMode}>Cancel</button>
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