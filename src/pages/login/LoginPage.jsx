import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import loginSchema from "../../validation/loginValidation";
import { authActions } from "../../store/auth";
import jwt_decode from "jwt-decode";

const LoginPage = () => {
  const history = useHistory();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const emailRef = useRef(null);

  //for redux actions
  const dispatch = useDispatch();
  const loggedInRedux = useSelector((state) => state.auth.loggedIn);

  // useEffect(() => {
  //   emailRef.current.focus();
  // });

  const handleEmailChange = (event) => {
    // console.log("event", event);
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleOnSubmit = (event) => {
    //prevent the form to do refresh
    if (event) {
      event.preventDefault();
    }

    const validatedValue = Joi.validate({ email, password }, loginSchema, {
      abortEarly: false,
    });
    const { error } = validatedValue;
    if (error) {
      //invalid email or password
      dispatch(authActions.logOut());
      toast.error("Email and/or password incorrect");
    } else {
      //email and password is good
      axios
        .post("/users/login", {
          email,
          password,
        })
        .then((res) => {
          dispatch(authActions.login());
          const decoded = jwt_decode(res.data.token);
          dispatch(authActions.updateUser(decoded));
          localStorage.setItem("tokenKey", res.data.token);
          if (location.state === null) {
            history.push("/cardPanel");
          } else {
            if (location.state.fromPage) {
              history.push(location.state.fromPage);
            } else {
              history.push("/cardPanel");
            }
          }
        })
        .catch((err) => {
          if (err.response) {
            alert(err.response.data);
          }
          localStorage.clear();
          dispatch(authActions.logOut());
        });
    }
  };

  const memoizedCallback = useCallback(() => {
    console.log("location.state", location.state);
    if (location.state) {
      if (location.state.email && location.state.password) {
        setEmail(location.state.email);
        setPassword(location.state.password);
        handleOnSubmit();
      }
    }
  }, [location.state, handleOnSubmit]);

  useEffect(() => {
    memoizedCallback();
  }, [location.state, email, password, memoizedCallback]);

  return (
    <form onSubmit={handleOnSubmit} className="loginForm">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        // ref={emailRef}
      ></input>
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      ></input>
      <br />
      <button>login</button>
      {/* like ngIf */}
      {loggedInRedux && (
        <div>
          your email is: {email}
          <br />
          your password is: {password}
        </div>
      )}
    </form>
  );
};

export default LoginPage;
