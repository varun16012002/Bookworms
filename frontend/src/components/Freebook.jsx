import React from 'react';
import Cards from './Cards';



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../../public/list.json";



function Freebook() {
  const filterData = list.filter((data) => data.category === "Free");


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4'>
        <div>
          <h1 className='font-semibold text-xl pb-2'>Free offered Course</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eveniet deleniti amet pariatur dignissimos asperiores expedita perspiciatis recusandae corrupti harum molestiae, quae corporis qui optio, exercitationem dolor iste. Cumque, itaque?</p>
        </div>

        <div>

          <Slider {...settings}>

            {filterData.map((item) => (
              <Cards item={item} key={item.id} />



            ))}

            {/* slider  */}
            <div className="card bg-base-100 w-92 shadow-xl mt-4 my-3 p-4 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
              <figure>
                <img
                  src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1724681558~exp=1724685158~hmac=1522a9efb5438c31cdabaaafc6edb50b2552158f98c6c2c2c957efcd69f375c9&w=740"
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  story book
                  <div className="badge badge-secondary">Free </div>
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex ratione magni voluptate quaerat ?</p>
                <div className="card-actions justify-between">
                  <div className="badge badge-outline">${0}</div>
                  <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
                </div>
              </div>
            </div>

            
            {/* slider  */}
            <div className="card bg-base-100 w-92 shadow-xl mt-4 my-3 p-4 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border ">
              <figure>
                <img
                  src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1724681558~exp=1724685158~hmac=1522a9efb5438c31cdabaaafc6edb50b2552158f98c6c2c2c957efcd69f375c9&w=740"
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  story book
                  <div className="badge badge-secondary">Free </div>
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex ratione magni voluptate quaerat ?</p>
                <div className="card-actions justify-between">
                  <div className="badge badge-outline">${0}</div>
                  <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
                </div>
              </div>
            </div>


            {/* slider  */}
            <div className="card bg-base-100 w-92 shadow-xl mt-4 my-3 p-4 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
              <figure>
                <img
                  src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1724681558~exp=1724685158~hmac=1522a9efb5438c31cdabaaafc6edb50b2552158f98c6c2c2c957efcd69f375c9&w=740"
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  story book
                  <div className="badge badge-secondary">Free </div>
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex ratione magni voluptate quaerat ?</p>
                <div className="card-actions justify-between">
                  <div className="badge badge-outline">${0}</div>
                  <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
                </div>
              </div>
            </div>


            {/* slider  */}
            <div className="card bg-base-100 w-92 shadow-xl mt-4 my-3 p-4 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
              <figure>
                <img
                  src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1724681558~exp=1724685158~hmac=1522a9efb5438c31cdabaaafc6edb50b2552158f98c6c2c2c957efcd69f375c9&w=740"
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  story book
                  <div className="badge badge-secondary">Free </div>
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex ratione magni voluptate quaerat ?</p>
                <div className="card-actions justify-between">
                  <div className="badge badge-outline">${0}</div>
                  <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
                </div>
              </div>
            </div>


            {/* slider  */}
            <div className="card bg-base-100 w-92 shadow-xl mt-4 my-3 p-4 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border ">
              <figure>
                <img
                  src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1724681558~exp=1724685158~hmac=1522a9efb5438c31cdabaaafc6edb50b2552158f98c6c2c2c957efcd69f375c9&w=740"
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  story book
                  <div className="badge badge-secondary">Free </div>
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex ratione magni voluptate quaerat ?</p>
                <div className="card-actions justify-between">
                  <div className="badge badge-outline">${0}</div>
                  <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
                </div>
              </div>
            </div>


            {/* slider  */}
            <div className="card bg-base-100 w-92 shadow-xl mt-4 my-3 p-4 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
              <figure>
                <img
                  src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1724681558~exp=1724685158~hmac=1522a9efb5438c31cdabaaafc6edb50b2552158f98c6c2c2c957efcd69f375c9&w=740"
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  story book
                  <div className="badge badge-secondary">Free </div>
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex ratione magni voluptate quaerat ?</p>
                <div className="card-actions justify-between">
                  <div className="badge badge-outline">${0}</div>
                  <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
                </div>
              </div>
            </div>



            {/* slider  */}
            <div className="card bg-base-100 w-92 shadow-xl mt-4 my-3 p-4 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
              <figure>
                <img
                  src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1724681558~exp=1724685158~hmac=1522a9efb5438c31cdabaaafc6edb50b2552158f98c6c2c2c957efcd69f375c9&w=740"
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  story book
                  <div className="badge badge-secondary">Free </div>
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex ratione magni voluptate quaerat ?</p>
                <div className="card-actions justify-between">
                  <div className="badge badge-outline">${0}</div>
                  <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
                </div>
              </div>
            </div>



            {/* slider  */}
            <div className="card bg-base-100 w-92 shadow-xl mt-4 my-3 p-4 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
              <figure>
                <img
                  src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1724681558~exp=1724685158~hmac=1522a9efb5438c31cdabaaafc6edb50b2552158f98c6c2c2c957efcd69f375c9&w=740"
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  story book
                  <div className="badge badge-secondary">Free </div>
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex ratione magni voluptate quaerat ?</p>
                <div className="card-actions justify-between">
                  <div className="badge badge-outline">${0}</div>
                  <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
                </div>
              </div>
            </div>



            {/* slider  */}
            <div className="card bg-base-100 w-92 shadow-xl mt-4 my-3 p-4 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
              <figure>
                <img
                  src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1724681558~exp=1724685158~hmac=1522a9efb5438c31cdabaaafc6edb50b2552158f98c6c2c2c957efcd69f375c9&w=740"
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  story book
                  <div className="badge badge-secondary">Free </div>
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex ratione magni voluptate quaerat ?</p>
                <div className="card-actions justify-between">
                  <div className="badge badge-outline">${0}</div>
                  <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
                </div>
              </div>
            </div>

            
            




          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;