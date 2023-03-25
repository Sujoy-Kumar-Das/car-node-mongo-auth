import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContextProvider } from "../../contex/AuthContext/AuthContext";
const Checkout = () => {
  const service = useLoaderData();
  const {_id,title,img,price} = service.data;
  const { user } = useContext(AuthContextProvider);
//   console.log(user);
const handleSubmit = (event)=>{
    event.preventDefault();
    const form = event.target;
    const fristName = form.fristName.value;
    const lastName = form.lastName.value;
    const email = user?.email;
    const phone = form.phone.value;
    const message = form.message.value;
    console.log()

    const order = {
        productId:_id,
        productName:title,
        productImg:img,
        customerInfo:{
            name:`${fristName} ${lastName}`,
            email:email,
            phone:phone,
            message:message
        }
    }

    fetch('http://localhost:5000/orders',{
        method: "POST", 
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify(order),
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        
    })
    
    
}
  return (
    <div>
      <img className="w-full lg:h-full rounded" src={img} alt="" style={{height:'300px'}} />
      <div className=" text-center mt-5">
      <h2 className=" text-2xl">You are about to order : {title} </h2>
      <p>Price : $ {price}</p>
      </div>
      <form onSubmit={handleSubmit} className="px-10 lg:px-0">
        {" "}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
          <input
            type="text"
            name="fristName"
            placeholder="Frist name"
            required
            className="input input-bordered input-accent w-full "
          />
          <input
            type="text"
            name="lastName"
            required
            placeholder="Last name"
            className="input input-bordered input-accent w-full "
          />
          <input
            type="tel"
            placeholder="Phone number"
            name="phone"
            required
            className="input input-bordered input-accent w-full "
          />
          <input
            type="email"
            placeholder={user?.email}
            name="email"
            readOnly
            className="input input-bordered input-accent w-full "
          />
        </div>
        <textarea
          className="textarea textarea-bordered w-full my-4"
          placeholder="Your message"
          name="message"
        ></textarea>
        <div className="flex justify-center">
        <input className="btn btn-primary" type="submit" value="Place order" />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
