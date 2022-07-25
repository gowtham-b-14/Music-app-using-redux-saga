//import { clear } from '@testing-library/user-event/dist/clear';
import React, { useState } from 'react'
import Productlist from './Productlist';
function Main() {

    const [IsButtonClicked, setIsButtonClicked] = useState(false);

    const music=()=>{
       setIsButtonClicked(true);
    }
    const clear=()=>{
        setIsButtonClicked(false);
     }

    return (
        <div>
            <div>
            <button className="btn btn-success" style={{margin:"2px"}} onClick={()=>music()}>Music-G</button>
            <button className="btn btn-danger" style={{margin:"2px"}} onClick={()=>clear()}>Clear</button>
            </div>
            { IsButtonClicked && <Productlist/> }  
        </div>
    )
}
export default Main;
