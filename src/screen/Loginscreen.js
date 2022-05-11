import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Loginscreen.css"
import {useDispatch} from 'react-redux'
import loginUser from '../actions/userActions'

function Loginscreen() {

    const dispatch = useDispatch()
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();

    const login = ()=>{
        const user = {email,password}
        dispatch(loginUser(user))
    }

    return (
        <>
            <div className='row justify-content-center'>
            <h2>Login Form</h2>
                <div className='col-md-5'>
                    <div>
                        <input type="email" placeholder="Enter Your Email"  className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div>
                        <input type="password" placeholder="Enter Your Password" className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>
                    <div style={{display:'flex'}} >
                        <button className='btn' onClick={login} >Login </button>

                        <p>forget password?</p>
                    </div>
                   

                    <div>
                        <p>Don't have an Account? <Link to="/register" style={{backgroundColor:"white",color:"black"}}>Register</Link></p>
                        
                    </div>

                </div>
            </div>

        </>
    )
}

export default Loginscreen
