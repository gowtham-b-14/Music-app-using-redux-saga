import React, { useEffect,useState } from 'react'
//import data from '../MusicProducts.json'
import { Link } from 'react-router-dom';
import Reducer from '../reducers/Reducer';
import Music_action from '../action/Music_action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProductsBegin } from '../action/Data_action';


function Productlist(props) {
    //const[products,setProducts]=useState("")
    //const products=data.products;

    //Mounting
    
    useEffect( () => {
        //setProducts(data.products)
        console.log("useeffect called")
        //props.dispatchReceivedAction();
        props.fetchProductsBegin();
    } , []);
    
    //console.log("hello",data.products)
    var array1 = [];
    if(props.products.length!==0){
        for (let i = 0; i <props.products.length; i++) {
            array1.push(
                <div key={i}  className="col-lg-3 col-sm-6">
                    <div className="card" style={{margin:"1%"}}>
                        <img className="card-img-top" style={{objectFit:"cover", width: "100%",height: "15vw"}} src={props.products[i].img} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{props.products[i].name}</h5>
                            {/* <p className="card-text">
                                {products[i].description}
                            </p> */}
                            {/* <button onClick={()=>props.fetchProductsBegin()}></button> */}
                            <p>₹{props.products[i].price}</p>
                            <Link to={`/detail/${props.products[i].id}`}><a className="btn btn-primary">Product Details</a></Link>
                        </div>
                    </div>
                </div>
            )
        }
    }
  return (
    <div  className='row'>
        {array1}
    </div>
  )
}

const mapStateToProps = (state) => {
    console.log("state in map () ",state);
    return {
        products:state.Reducer
    }
}

const mapDispatchToProps = (dispatch) => {
    // return {
    //     dispatchReceivedAction : () => { dispatch(Music_action())  },
    // }
    return bindActionCreators({fetchProductsBegin},{},{},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Productlist)