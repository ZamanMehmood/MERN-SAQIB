import React, {useState} from "react";
import axios from "axios";
import "./loginpage.scss";

const Loginpage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit =  async(e) => {
        e.preventDefault();
        console.log("handle submit", email, password);
    
        let pyaload = {
          email,
          password,
        };
    
        const loginCall = await axios.post(
          "http://localhost:8081/users/login",
          pyaload
        );
        console.log("loginCall", loginCall);
      };
    

  return (
    <form className="main-section" onSubmit={handleSubmit}>
      <div className="container ">
        <div className="row">
          <div className="col-6">
            <div className="m-2">
              <label htmlFor="">Email*</label>
              <input
                type="email"
                className="main-input"
                placeholder="Type your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}

              />
            </div>
            <div className="m-2">
              <label >Password*</label> 
              <i className="fa fa-eye-slash main-icon"></i>
              <input
                type="password"
                className="main-input"
                placeholder="Minimum 6 characters allowed"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
             <a className="text-primary forgot-password">Forgot password?</a>
          </div>
          <div className="col-6">
            <button type="submit" className="login-button text-light">
              Login
            </button>
            <p className="loginwith">Or,login with</p>
            <div className="m-2">
              <i className="fa fa-facebook facebook-icon text-light"></i>
              <button className="btn btn-primary text-light facebook-field m-2">
                Facebook
              </button>
            </div>
            <div className="m-2">
              <i className="fa fa-google facebook-icon text-light"></i>
              <button className="btn btn-danger text-light facebook-field m-2">
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Loginpage;