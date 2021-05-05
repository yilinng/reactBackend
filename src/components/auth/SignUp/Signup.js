import { useRef, useState } from 'react';
import { auth } from './../../../firebase';
import './Signup.css';
import { Link, useHistory } from "react-router-dom";

const Signup = () => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [error, setError] = useState('');
    const history = useHistory();

    const signUp = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            history.push('/');
        }).catch(err => {
            setError(err.message);
        })
    }

    return (
        <div className="signup">
            <form>
                <h1>Sign up</h1>
                    <input ref={emailRef} type="email" placeholder="input email..." required/>
                    <input ref={passwordRef} type="password" placeholder="input password..." required/>
                    <button className="signBtn" onClick={signUp}>Sign up </button>
                <span>Aready registered? <Link className="signup__link" to="/signin">Sign in</Link></span>
            </form>
            <span style={{color:'red'}}>{error}</span>
        </div>
    )}

export default Signup;
