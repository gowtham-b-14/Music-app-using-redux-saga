import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import data from '../MusicProducts.json'

function Detail() {

  const products=data.products;
  const kar = window.location.pathname.split("/")[2];
  //let {id}=useParams();
  //console.log(id)
  console.log(kar)
  return (
    <>
    <div className='row'>
    <div className='col-6'>
      <img src={products[kar-1].img} style={{width:"100%",height:"100%"}}/>
    </div>
    <div className='col-6'>
     <div>
     {products[kar-1].description}
     </div>
    </div>
    </div>
    <Link to={`/name`} className="btn btn-primary">Sumbit Your Name</Link>
    </>
  )
}
export default Detail;