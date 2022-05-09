import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { Fragment, useEffect, useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import google from "../../image/logo/google.png";
import "./Login.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user1, error] =
    useSignInWithEmailAndPassword(auth);
    console.log(error);
  const [signInWithGoogle, user2] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  console.log(user1);

  if (user1 || user2) {
    navigate(from, { replace: true });
  }

  const handleResetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Send email reset password");
    } else {
      toast("Please provide the email");
    }
  };

  const handleLoginUser = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);

    await signInWithEmailAndPassword(email, password);

    const { data } = await axios.post("https://boiling-lake-18195.herokuapp.com/login", { email });
    localStorage.setItem("accessToken", data.accessToken);
  };

  return (
    <Fragment>
      <section className="form-container">
        <div className="form-heading">
          <h2> Login </h2>
         
          <form onSubmit={handleLoginUser}>
            <div className="input-field align-items-center d-flex">
              <FontAwesomeIcon className="icon" icon={faUser} />
              <input ref={emailRef} type="email" placeholder="Enter email" />
            </div>

            <div className="input-field align-items-center d-flex">
              <FontAwesomeIcon className="icon" icon={faLock} />
              <input ref={passwordRef} type="password" placeholder="Password" />
            </div>

            <p style={{ color: "red" }}>{error?.message}</p>

            <p>
              Forgot Password? <span onClick={handleResetPassword} className="reset-password">Reset Password
            </span></p>

            <button type="submit">Login</button>

            <div className="link-style">
              <Link to="/signUp">
                <p className="text-end">Sign Up</p>
              </Link>
            </div>

            <button onClick={() => signInWithGoogle()}>
              <img width={20} src={google} alt="" className="google"/> Google
            </button>
          </form>
        </div>
      </section>
      <ToastContainer />
    </Fragment>
  );
};

export default Login;
