import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getproduct } from './productslice';

const Data = () => {

    const product=useSelector((state)=>state.product.product)
    console.log(product);
    const status=useSelector((state)=>state.product.status)
    const dispatch=useDispatch()
    useEffect(()=>{
       dispatch(getproduct()) 
       
    },[])
    if(status==='loading'){
        return <p>Loading...........</p>
    }
    if(status==='failed'){
        return <p>something went wrong....</p>
    }

    
  return (
    <div className='row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-1'>
        {product.map((product)=>(
            <div key={product.id} className='col d-flex flex-column'>
<div className="card" style={{ width: '18rem' }}>
      <img src={product.url} className="card-img-top" alt="Product Image" />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.thumbnailUrl}</p>
        <h6 className="card-subtitle mb-2 text-muted">$99.99</h6>
        <div className="d-flex justify-content-between">
          <a href="#" className="btn btn-primary">Add to Cart</a>
          <a href="#" className="btn btn-outline-secondary">View Details</a>
        </div>
      </div>
    </div>

            </div>
        ))}
      
    </div>
  )
}

export default Data
