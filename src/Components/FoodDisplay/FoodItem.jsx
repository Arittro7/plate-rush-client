import React from 'react';
import { assets } from '../../assets/assets';

const FoodItem = ({id, name, price, image, description}) => {
  return (
    <div className='mb-3'>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img className='p-4 rounded-xl'
      src={image}
      alt="food item" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <img className='w-24' src={assets.rating_starts} alt="" />
    <p>{description}</p>
    <p className='text-xl font-semibold'>${price}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Order</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default FoodItem;