import {useState, useEffect} from "react";
import './signUp.style.sass';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { singUpReq } from "../../../redux/actions/auth";
import {ApplicationState} from '../../../redux/store'
import {usePrev} from '../../../hooks/usePrev';



export const SignUp = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const isSignUpProcessed = useSelector<ApplicationState>((state) => state.auth.isSingUpProccess);
    const hasError = useSelector<ApplicationState>((state) => state.system.hasError);
    const prevIsSignUpProcessed = usePrev(isSignUpProcessed);

    useEffect(() => {
        const mustRedirect = !isSignUpProcessed && !!prevIsSignUpProcessed && !hasError
        if (!mustRedirect) return;
        history.replace('/auth/signIn')
    }, [isSignUpProcessed, prevIsSignUpProcessed, hasError, history])

    const signUp = () => {
        dispatch(singUpReq({
            username: userName,
            password,
            email
        }))
    }

    const isFullFormData: boolean = !!userName && !!email && !!password;

    return (
        <div className='authBlock'>
            <input
                type="text"
                placeholder='Имя пользователя'
                className='authInput'
                value={userName}
                onChange={event => setUserName(event.target.value)}
            />
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
                onClick={signUp}
            >
                Sign Up
            </button>
        </div>
    )
}