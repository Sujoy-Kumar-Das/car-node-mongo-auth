import React, { useContext } from "react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import singupImg from "../../../assets/images/login/login.svg";
import { AuthContextProvider } from "../../../contex/AuthContext/AuthContext";
const Singup = () => {
  const {createUser,googleLogin} = useContext(AuthContextProvider);
  // console.log(createUser)
  const handleCreateUserSubmit = (event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name,email,password)
    createUser(email,password)
    .then(result => {
      const user = result.user;
      console.log(user)
    })
    .catch(error=> console.error(error))
  }
  const handleGoogleLogin =()=>{
    googleLogin()
    .then(result=>{
      const user = result.user;
      console.log(user)
    })
    .catch(error=>console.error(error))
  }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" w-1/2">
          <img src={singupImg} alt="" />
        </div>
        <div className="card  w-full max-w-sm shadow-2xl bg-base-100 ">
        <h1 className="text-4xl font-bold text-center pt-5">Singup now!</h1>
          <form onSubmit={handleCreateUserSubmit} className="card-body pb-5">
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
              <Link className=" link link-hover text-red-700" to="/login">
                login now
              </Link>
            </p>
            <p className="pb-2">Or singup with</p>
            <div className="flex justify-center pb-10">
              <p onClick={handleGoogleLogin} className="mx-2 rounded-full p-3 text-white bg-primary ">
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
