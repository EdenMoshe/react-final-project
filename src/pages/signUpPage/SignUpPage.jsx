import axios from "axios";
import Joi from "joi-browser";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import signUpSchema from "../../validation/signUpValidation";
import "./signUpPage.css";

const SignUpPage = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [biz, setBiz] = useState(false);

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleBiz = (event) => {
    setBiz(event.target.checked);
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    const validatedValue = Joi.validate(
      { name, email, password, biz },
      signUpSchema,
      {
        abortEarly: false,
      }
    );

    //add joi validation
    axios
      .post("/users/register", { name, email, password, biz })
      .then((res) => {
        console.log("res.data", res.data);
        if (setBiz === true) {
          history.push("/createNewBizCard");
        }
        history.push("/loginPage", { email, password });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <form className="signUpForm" onSubmit={handleSignUp}>
      <div className="form-group row form-row">
        <label htmlFor="inputEmail3" className="col-sm-1 col-form-label">
          Name:
        </label>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control"
            id="inputEmail3"
            placeholder="Name"
            value={name}
            onChange={handleName}
          />
        </div>
      </div>

      <div className="form-group row form-row">
        <label htmlFor="inputEmail3" className="col-sm-1 col-form-label">
          Email
        </label>
        <div className="col-sm-5">
          <input
            type="email"
            className="form-control"
            id="inputEmail3"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
        </div>
      </div>

      <div className="form-group row form-row">
        <label htmlFor="inputPassword3" className="col-sm-1 col-form-label">
          Password
        </label>
        <div className="col-sm-5">
          <input
            type="password"
            className="form-control"
            id="inputPassword3"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
        </div>
      </div>
      <fieldset className="form-group">
        <div className="row">
          <div className="col-sm-5"></div>
        </div>
      </fieldset>
      <div className="form-group row form-row">
        <div className="col-sm-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck1"
              onChange={handleBiz}
              checked={biz}
            />
            <label className="form-check-label" htmlFor="gridCheck1">
              Business Account
            </label>
          </div>
          <br />
        </div>
      </div>
      <div className="form-group row form-row">
        <div className="col-sm-5">
          <button type="submit" className="btn btn-primary">
            Sign up!
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUpPage;
