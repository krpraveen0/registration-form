import React, { useState } from "react";
import sideImage from "../assets/image.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") {
      setName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };
  // //to read value from an input
  // const readValue = (e) => {
  //   const { name, value } = e.target;
  //   setUser({ ...user, [name]: value });
  // };

  const handleSubmit = async () => {
    // const { name, email, password, cpassword } = user;
    if(name === '' || name === undefined || name === null) return toast.warning("username cannot be empty");
    if(email === '' || email === undefined || email === null) return toast.warning("email can't be empty");
    if(password === '' || password === undefined || password === null) return toast.warning("password cannot be empty");
    if(confirmPassword === '' || confirmPassword === undefined || confirmPassword === null) return toast.warning("Password confirmation field can't be empty");
    if(confirmPassword !== password) return toast.error("Password & Confirm Password doesn't matches.")
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        cpassword: confirmPassword,
      }),
    };
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/registration/register",
        requestOptions
      );
      const data = await response.json();
      if (response.status === 400) {
        setTimeout(()=>window.location.reload(),5000);
        console.log("The registeration failed", JSON.stringify(data));
        return toast.error(`Registration Failed \n ${JSON.stringify(data)}`);
      }
      if (response.status === 404) {
        setTimeout(()=>window.location.reload(),5000);
        return toast.error(
          "Registeration failed, bad request",
          JSON.stringify(data)
        );

      }
      toast.success("Sucessfully registered", JSON.stringify(data));
      console.log("Sucessfully Registration", JSON.stringify(data));
      navigate("/login");
    } catch (err) {
      setTimeout(()=>window.location.reload(),5000);
      if (err.response.status === 404) {
        return toast.error("Registration Failed from server");
      }
      if (err.response.status !== 500) {
        return toast.error("Registration Failed");
      }
      toast.error("Internal Server Error..");
    }
  };
  
  return (
    <div className="container-fluid">
      <div className="row justify-content-center p-3">
        <div className="col-md-5 col-sm-12">
          <img
            src={sideImage}
            className="d-block w-100 img-fluid"
            alt="slider"
          />
        </div>
        <div className="col-md-5 col-sm-12 shadow-lg p-5 bg-light">
          <div className="text-center">
            <h3 className="text-primary">Create Account</h3>
          </div>
          <div className="p-4">
            <div className="input-group mb-3">
              <span className="input-group-text bg-primary">
                <i className="bi bi-person-plus-fill text-white"></i>
              </span>
              <input
                className="form-control"
                type="text"
                value={name}
                onChange={(e) => handleInputChange(e)}
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text bg-primary">
                <i className="bi bi-envelope text-white"></i>
              </span>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => handleInputChange(e)}
                placeholder="Email"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text bg-primary">
                <i className="bi bi-lock-fill text-white"></i>
              </span>
              <input
                className="form-control"
                type="password"
                id="password"
                value={password}
                onChange={(e) => handleInputChange(e)}
                placeholder="Password"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text bg-primary">
                <i className="bi bi-unlock-fill text-white"></i>
              </span>
              <input
                className="form-control"
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => handleInputChange(e)}
                placeholder="Confirm Password"
              />
            </div>
            <div className="d-grid col-12 mx-auto">
              <button
                onClick={() => handleSubmit()}
                type="submit"
                className="btn btn-primary"
              >
                Register
              </button>
            </div>
            <p className="text-center mt-3">
              Already have an account?
              <span className="text-primary" onClick={()=>navigate("/login")}><span> </span>Sign In</span>
            </p>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="row justify-content-md-right">
              <div className="col-12">
                <div className="float-end my-2 ">
                  <button
                    type="button"
                    className="btn btn-dark mx-1 rounded-pill btn-lg"
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary mx-1 rounded-pill btn-lg"
                  >
                    Register
                  </button>
                </div>
              </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <img
              src={sideImage}
              className="img-fluid sideimage"
              height="500px"
              width="390px"
              alt="side"
            ></img>
          </div>

          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="row">
              
                <h3 className="form_head">Create Your Account</h3>
              
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="form">
                  <div className="form-body">
                      <div className="username">
                          <label className="form__label" htmlFor="name">Name </label>
                          <input className="form-control" type="text" value={name} onChange = {(e) => handleInputChange(e)} id="name" placeholder="Name"/>
                      </div>
                      <div className="email">
                          <label className="form__label" htmlFor="email">Email </label>
                          <input  type="email" id="email" className="form-control" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                      </div>
                      <div className="password">
                          <label className="form__label" htmlFor="password">Password </label>
                          <input className="form-control" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                      </div>
                      <div className="confirm-password">
                          <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
                          <input className="form-control" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                      </div>
                  </div>
                  <div className="footer">
                      <button onClick={()=>handleSubmit()} type="submit" className="btn">Register</button>
                  </div>
                </div>
              </div>
            </div>

            <br />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Register;
