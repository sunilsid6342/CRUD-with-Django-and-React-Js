import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const EditContact = () => {
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [phonenp, setNumber]=useState("");
    
    const { id }=useParams();
    const [getlist, setList]=useState([]);

    useEffect(()=>{
        getlistdetails();
      },[]);
    
      const getlistdetails=async ()=>{
        let result=await fetch("http://127.0.0.1:8000/list/"+id,{
          method:"GET"
        });
        result = await result.json();
        
        setName(result.name)
        setEmail(result.email)
        setNumber(result.phonenp)
      }

    const handleSubmit= async (e)=>{
        e.preventDefault();
        const data={
            
            name,
            email,
            phonenp
        }
        console.log(data);

        let result=await fetch("http://127.0.0.1:8000/list/"+id,{
          method:"POST",
          body:JSON.stringify({name,phonenp,email}),
          headers:{
            "content-type":"application/json"
          }
        });
        result=await result.json()
        console.log(result);
        toast.success("Student Record Update Succesfull");
        
    }

    return (
        <div className='container'>
            {
                getlist ? (<>
                <div className='row'>
                <h1 className='display-3 my-5 text-center'>
                    Edit Student {id}
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
                            <input type="Submit" style={{float:"left"}} value="Update Student" className="m-1 btn btn-dark" />
                            <Link to="/" style={{float:"right"}} className="m-1 btn btn-danger ml-3" >Cancel</Link>
                        </div>
                        
                    </form>
                </div>
            </div>
                </>):<h1>Student {id} does not exist</h1>
            }

        </div>
    )
}

export default EditContact