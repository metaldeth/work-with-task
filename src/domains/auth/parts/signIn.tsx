import React, {useState} from "react";
// import './signIp.style.sass';
import { useDispatch } from "react-redux";
import { singInReq } from "../../../redux/actions/auth";
import { Link } from "react-router-dom";

export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const signIn = () => {
        dispatch(singInReq({
            password,
            email
        }))
    }

    const isFullFormData: boolean = !!email && !!password;

    return (
        <>
            <div className='authBlock'>
                <input
                    type="text"
                    placeholder='E-mail'
                    className='authInput'
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <input
                    type="password"
                    placeholder='Пароль'
                    className='authInput'
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                <button 
                    disabled={!isFullFormData}
                    className='authButton'
                    onClick={signIn}
                >Sign In</button>
            </div>
            <Link to='/auth/signUp'>To Sign Up</Link>
        </>
    )
}