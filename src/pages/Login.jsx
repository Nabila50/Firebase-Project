import React from "react";
import { Link } from "react-router";
 

const Login = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-3">
        <h2 className="font-semibold text-2xl text-center">Login Your Account</h2>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="text-center font-semibold pt-5">Don't have an Account? <Link className="text-secondary" to="/auth/register">Register</Link></p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
