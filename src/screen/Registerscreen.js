import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Registerscreen.css"
import { useDispatch } from 'react-redux'
import { registerUser } from '../actions/userActions'


function Registerscreen() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [cpassword, setCpassword] = useState();
    const dispatch = useDispatch();

    function register() {
        if(password!==cpassword){
            alert("Password Not Matched")
        }
        else if(password.length<8){
            alert("At least minumum 8 characters Required")
        }
        
        else{
            
            const user = {
                name,email,password
            }
            console.log(user)
            dispatch(registerUser(user))
            alert('User Registerd SuccessFully')
        }
    }


    return (
        <>
            <div className='row justify-content-center'>
                <h2>Register Form</h2>
                <div className='col-md-5'>
                    <div>
                        <input required type="text" placeholder="Enter Your Name" className="form-control" value={name} onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div>
                        <input required type="email" placeholder="Enter Your Email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div>
                        <input required type="password" placeholder="Enter Your Password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <div>
                        <input required type="password" placeholder="Confirm Your Password" className="form-control" value={cpassword} onChange={(e) => { setCpassword(e.target.value) }} />
                    </div>
                    <br/>
                    <div>
                        <button className='btn' onClick={register}>Register</button>
                    </div>

                    <div>
                        <p>Already have an Account?<Link to="/login" style={{ backgroundColor: "white", color: "black" }}>Login</Link></p>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Registerscreen
