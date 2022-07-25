import React, { useState } from 'react'
import { connect } from 'react-redux';
import Nameaction from '../action/Nameaction';

function Name(props) {
    const[val,setVal]=useState("");
    const post=()=>{
        console.log(val);
        props.showname(val)
    }
    const name=props.name
  return (
    <div>
        {name}
        <input type="text" placeholder="name" value={val} onChange={(e)=>setVal(e.target.value)}></input>
        <button className='btn btn-primary' onClick={()=>post()}>Post</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
    name:state.Namereducer
})

const mapDispatchToProps = (dispatch)=>{
    console.log("showname props")
    return{
        showname:(val)=>dispatch(Nameaction(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Name)
