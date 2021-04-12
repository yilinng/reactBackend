import { useRef } from 'react';
import { auth } from './../../../firebase';
import './Signin.css';
import { Link, useHistory } from "react-router-dom";

const Signin = () => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const history = useHistory();

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
            history.push('/');
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="signin">
            <form>
                <h1>Sign in</h1>
                    <input ref={emailRef} type="email" placeholder="input email..."/>
                    <input ref={passwordRef} type="password" placeholder="input password..."/>
                    <button onClick={signIn}>Sign in </button>
                <span>Not yet register? <Link className="signin__link" to="signup">Sign up</Link></span>
            </form>
        </div>

    )
}

export default Signin;
