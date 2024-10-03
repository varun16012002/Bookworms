import React from 'react'
import list from"../../public/list.json"
import Cards from "../components/Cards"
import{Link} from"react-router-dom"
function Course() {
  return (
    <>
      <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl font-semibold md:text-4xl'> We're Delighted to have you
             <span className='text-pink-500'> Here! :)</span>
          </h1>
          <p className='mt-12'>
            Lorem ipsum dolor sit amet consectetur adipisicing
             elit. Excepturi molestias officiis ea a delectus repellat facere sint numquam.
             Quas quis consectetur tempore unde! Impedit,
              blanditiis ullam sapiente quo quod suscipit ratione! Cupiditate, perspiciatis. 
             Quaerat earum illo magni magnam ullam, perspiciatis
              atque repellendus fugit iure quod nesciunt cum molestias deserunt impedit porro 
             libero natus eius odio minima a molestiae veritatis
              odit? Voluptates, earum commodi vel exercitationem inventore suscipit rerum nisi aperiam.
          </p>
          <Link to="/">
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
            Back
             </button>
          </Link>
        </div>
          <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
              list.map((item)=>(
                <Cards key={item.id} item={item}/>
              ))
              
            }

          </div>
      </div>
      
    </>

  )
}

export default Course
