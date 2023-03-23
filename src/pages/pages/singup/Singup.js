import React from "react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import singupImg from "../../../assets/images/login/login.svg";
const Singup = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" w-1/2">
          <img src={singupImg} alt="" />
        </div>
        <div className="card  w-full max-w-sm shadow-2xl bg-base-100 ">
        <h1 className="text-4xl font-bold text-center pt-5">Singup now!</h1>
          <form className="card-body pb-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="Name"
                name="name"
                required
                className="input input-bordered"
              />
            </div>
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
            
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sing up</button>
            </div>
          </form>
          <div className="text-center ">
          <p>
              Already have an account ? please{" "}
              <Link className=" link link-hover" to="/login">
                login now
              </Link>
            </p>
            <p className="pb-2">Or singup with</p>
            <div className="flex justify-center pb-10">
              <p className="mx-2 rounded-full p-3 text-white bg-primary ">
                <FaGoogle></FaGoogle>
              </p>
              <p className="mx-2 rounded-full p-3 text-white bg-primary ">
                <FaFacebook></FaFacebook>
              </p>
              <p className="mx-2 rounded-full p-3 text-white bg-primary ">
                <FaTwitter></FaTwitter>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singup;
