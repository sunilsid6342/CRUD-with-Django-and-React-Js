import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const AddContact = () => {
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [phonenp, setNumber]=useState("");
    const hist=useNavigate();

    const handleSubmit= async (e)=>{
        e.preventDefault();
        let result=await fetch("http://127.0.0.1:8000/",{
          method:"POST",
          body:JSON.stringify({name,phonenp,email}),
          headers:{
            "content-type":"application/json"
          }
        });
        result=await result.json()
        console.log(result);
        toast.success("Student Record Update Succesfull");
        if(result)
        {
            hist('/')
        }
    }
    
  return (
    <div className='container'>
        <div className='row'>
            <h1 className='display-3 my-5 text-center'>
                Add Student
            </h1>
            <div className='col-md-6 shadow mx-auto p-5'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input type="text" placeholder="Name" className='form-control m-1'
                        value={name} onChange={(e)=>{setName(e.target.value)}} />
                    </div>
                    <div className='form-group'>
                        <input type="email" placeholder="Email" className='form-control m-1' 
                        value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    </div>
                    <div className='form-group'>
                        <input type="number" placeholder="Phone Number" className='form-control m-1' 
                        value={phonenp} onChange={(e)=>{setNumber(e.target.value)}} />
                    </div>
                    <div className='form-group'>
                        <input type="Submit" value="Add Student" className="form-control m-1 btn btn-block btn-dark"/>
                    </div>
                </form>
            </div>
        </div>

    </div>
  )
}

export default AddContact