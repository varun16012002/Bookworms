import React from 'react'
import Freebook from './Freebook';
import list from"../../public/list.json"


function Cards({ item }) {


    return (
        <>
            <div className='mt-4' >
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
            </div>
        </>
    )
}

export default Cards;




