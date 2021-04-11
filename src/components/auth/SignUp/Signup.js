import { useRef } from 'react';
import { auth } from './../../../firebase';
import './Signup.css';
import { Link, useHistory } from "react-router-dom";

const Signup = () => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const history = useHistory();

    const signUp = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user);
            history.push('/');

        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="signup">
            <form>
                <h1>Sign up</h1>
                    <input ref={emailRef} type="email" />
                    <input ref={passwordRef} type="password" />
                    <button onClick={signUp}>Sign up </button>
                <h6>Aready login in? <Link className="signup__link" to="/signin">Sign in</Link></h6>
            </form>
        </div>
    )}

export default Signup;
