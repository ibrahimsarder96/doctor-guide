import React from 'react';
import expert1 from '../../../assets/expert2.jpg';
const Experts = () => {
  return (
    <div>
      <h1 className='text-center text-4xl font-bold text-accent'>Our Medical Experts</h1>
      <h2 className='text-center text-xl  text-accent'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum velit consectetur corporis? Modi, </h2>
      <h2 className='text-center text-xl  text-accent'>amet consectetur adipisicing elit. Earum velit consectetur </h2>
      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-28 my-8">
  <div>
  <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={expert1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  </div>
  
  <div>
  <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={expert1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  </div>
  <div>
  <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={expert1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  </div>

</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    {/* <img src={expert1} className="w-full" alt=''/> */}
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
    </div>
  );
};

export default Experts;