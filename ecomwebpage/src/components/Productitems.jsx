import React from 'react'
import {useLoaderData, useNavigate} from 'react-router-dom'

const Productitems = () => {

  const items = useLoaderData();
  const navigate = useNavigate();

  return (
    <>
      <div name='' className='card pt-32'>
        { 
          items.map(item => (
            <div className="card-item" onClick={()=>navigate(`/products/${item.id}`)}>
              <img src={item.image} alt="" />
              <div className='card-body'>
                <p>Rs.{item.price}</p>
                <div className="rating">
                  <p>{item.rating.rate}</p>
                 </div>
              </div>
            </div>
          ))

        }
      </div>
    </>
  )
}

export default Productitems
