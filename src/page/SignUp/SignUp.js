import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useRef, useState } from "react";
import google from "../../image/logo/google.png";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init"
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const SignUp = () => {
const nameRef = useRef("");
const emailRef = useRef("");
const passwordRef = useRef("");
const confirmPasswordRef = useRef("");
const [error, setError] = useState("");
const navigate = useNavigate();

const [ createUserWithEmailAndPassword, user1,  hookError,] = useCreateUserWithEmailAndPassword(auth);
const [signInWithGoogle, user2] = useSignInWithGoogle(auth);
const [sendEmailVerification] = useSendEmailVerification(auth);

if(user1 || user2){
  navigate('/')
}

const handleSignUpUser = async event => {
  event.preventDefault();
  const email = emailRef.current.value;
  const password = passwordRef.current.value;
  const confirmPassword = confirmPasswordRef.current.value;
  if(password.length < 6){
    setError('Password must be atleast 6 characters');
    return;
  };
  if(password !== confirmPassword){
    setError("Password did not match")
    return;
  };

  createUserWithEmailAndPassword(email, password);
  await sendEmailVerification();
  toast('Email Verification Sent')
};


  return (
    <Fragment>
      <section className="form-container">
        <div className="form-heading">
          <h2> Sign Up </h2>
          <form onSubmit={handleSignUpUser} >
            <div>
              <div className="input-field align-items-center d-flex">
                <FontAwesomeIcon className="icon" icon={faUser} />
                <input ref={nameRef} type="name" required placeholder="Name" />
              </div>

              <div className="input-field align-items-center d-flex">
                <FontAwesomeIcon className="icon" icon={faUser} />
                <input ref={emailRef} type="email" required autoComplete="no" placeholder="Email" />
              </div>

              <div className="input-field align-items-center d-flex">
                <FontAwesomeIcon className="icon" icon={faLock} />
                <input ref={passwordRef} type="password" required placeholder="Password" />
              </div>

              <div className="input-field align-items-center d-flex">
                <FontAwesomeIcon className="icon" icon={faLock} />
                <input ref={confirmPasswordRef} type="password" required placeholder="Confirm Password" />
              </div>
            </div>

            <p style={{color: 'red'}} >{error}</p>
            <p style={{color: 'red'}} >{hookError?.message}</p>

            <button type="submit">
              Sign Up
            </button>
            <div className="link-style">
              <Link to="/login">
                <p className="text-end">Already have an account?</p>
              </Link>
            </div>
            <button onClick={() => signInWithGoogle()} >
              <img width={20} src={google} alt="" className="google" /> Google
            </button>
          </form>
        </div>
      </section>
      

      <ToastContainer />
    </Fragment>
  );
};

export default SignUp;
