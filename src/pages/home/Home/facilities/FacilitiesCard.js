import React from 'react';

const FacilitiesCard = ({facilitie}) => {
    const {img,title} = facilitie;
    return (
        <div className="card w-36 lg:w-40 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">

          <h2 className="card-title">{title}</h2>
        </div>
      </div>
    );
};

export default FacilitiesCard;