import React, { useContext } from 'react';
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContextProvider } from '../../../contex/AuthContext/AuthContext';
import loginImg from '../../../assets/images/login/login.svg'
const Login = () => {
    const {loginUser} = useContext(AuthContextProvider)
    const handleLogin = (event)=>{
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      loginUser(email,password)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(error=>console.error(error));
    }
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" w-1/2">
            <img src={loginImg} alt="" />
          </div>
          <div className="card  w-full max-w-sm shadow-2xl bg-base-100 ">
          <h1 className="text-4xl font-bold text-center pt-5">Login now!</h1>
            <form onSubmit={handleLogin} className="card-body pb-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  required
                  className="input input-bordered"
                />
              </div>
              
                <p className=" link link-hover" >
                  Forget Password
                </p>
              
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="text-center ">
            <p>
                Don't have account ? please{" "}
                <Link className=" link link-hover text-red-700" to="/singup">
                  register now
                </Link>
              </p>
              <p className="pb-2">Or Login with</p>
              <div className="flex justify-center pb-10">
                <p className="mx-2 rounded-full p-3 text-white bg-blue-800 ">
                  <FaGoogle></FaGoogle>
                </p>
                <p className="mx-2 rounded-full p-3 text-white bg-blue-800 ">
                  <FaFacebook></FaFacebook>
                </p>
                <p className="mx-2 rounded-full p-3 text-white bg-blue-800 ">
                  <FaTwitter></FaTwitter>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;