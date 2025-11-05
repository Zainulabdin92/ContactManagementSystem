import React, { useState } from 'react';
import '../assets/css/form.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaAt, FaPhoneFlip, FaRegAddressCard, FaUserPlus } from 'react-icons/fa6';


const AddContact = () => {
    const [values, setValues] = useState({
        name:'',
        email:'',
        phone:'',
        address:''
    })
    const navigate = useNavigate()
    const handleInput = (event)=>{
        setValues({...values,[event.target.name]:event.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()

        axios.post("http://localhost:3000/contactmsyt/add-contact",values,{headers:{
            Authorization:`Berear ${localStorage.getItem('token')}`
        }
        })
        .then((res)=>{
            if(res.data.success){
            toast.success('Contact Added Successfully',{
                position: "top-right",
                autoClose :5000
            })
            navigate('/dashboard')
            }
        }).catch((err)=>{
            if(err.response.data.errors){
            setServerErrors(err.response.data.errors)
            }else{
            console.log(err)
            }
        })
    }
    return (
        <div className='add-form-container'>
            <form className='add-form' onSubmit={handleSubmit}>
                <h2>Add Conatct</h2>
                <div className="form-group">
                    <FaUserPlus/>
                    <input type="text" placeholder='Enter name' className='form-content' name='name' onChange={handleInput} />
                </div>
                <div className="form-group">
                    <FaAt/>
                    <input type="email" placeholder='Enter email' className='form-content' name='email' onChange={handleInput} />
                </div>
                <div className="form-group">
                    <FaPhoneFlip/>
                    <input type="text" placeholder='Add Phone Number' className='form-content' name='phone' onChange={handleInput} />
                </div>
                <div className="form-group">
                    <FaRegAddressCard/>
                    <input type="text" placeholder='Add Address' className='form-content' name='address' onChange={handleInput} />
                </div>
                <button className='form-btn'>Add</button>
            </form>
        </div>
    )
}

export default AddContact