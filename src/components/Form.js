import React, { useState } from 'react'

function Form() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <form>
        <div class="form-group">
          <label>Name</label>
          <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter name"/>
        </div>
        <div class="form-group">
          <label>Price</label>
          <input type="number" className="form-control" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Price"/>
        </div>
        <div class="form-group">
          <label>Description</label>
          <input type="text" className="form-control" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Description"/>
        </div>
        <button  type='submit' onClick = {(event) => {
                event.preventDefault();
                console.log("form mounted")
                console.log(name,price,description);
            }
            } class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Form;
