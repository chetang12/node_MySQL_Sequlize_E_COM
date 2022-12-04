

import React, { useState, useNavigate } from 'react'
import axios from 'axios';
import { Container } from 'react-bootstrap'
import Button from '@mui/material/Button';
//**************************** */
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUsername] = useState('');
    const [phoneNo, setPhone] = useState(0)
    const [address, setAddress] = useState('')
    const [gender, setGender] = useState('')
    const [showLogin, setShowLogin] = useState(true);
    // const Navigate = useNavigate();

    const LoginUser = async () => {

        const data = {
            email: email,
            password: password
        }

        await axios.post(`/api/products/loginUser`, data)

        alert("Login successfully")
        // return <Navigate to = '/'/>
    }
    const RegisterUser = async () => {
        const data = {
            username: userName,
            phone: phoneNo,
            email: email,
            password: password,
            gender: gender ? gender : "male",
            address: address
        }
        await axios.post("/api/products/addUser", data)
        alert("New User Account Created")
    }
    //********************* */
    const [value, setValue] = useState('male');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            {
                showLogin ?
                    <Container className='mt=20 p-2'>
                        <form>
                            <h2>Login User</h2>
                            {/* <!-- Email input --> */}
                            <div className="form-outline mt-5 mb-10">
                                <input type="email" id="form2Example1" className="form-control" value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                                <label className="form-label" for="form2Example1">Email address</label>
                            </div>
                            {/* <!-- Password input --> */}
                            <div className="form-outline mb-4" >
                                <input type="password" id="form2Example2" className="form-control" value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                                <label className="form-label" for="form2Example2" >Password</label>
                            </div>
                            {/* <!-- Submit button --> */}
                            <button type="button" className="btn btn-primary btn-block mb-4" onClick={LoginUser}>Login in</button>
                            <button type="button" className="btn btn-primary btn-block mb-4" onClick={(e) => setShowLogin(false)}>Register</button>
                            <Button variant="contained" sx={{ backgroundColor: 'red', mb: 3, p: 1 }} onClick={LoginUser} >Login</Button>
                        </form>
                    </Container> :
                    <Container className='mt=20 p-2'>
                        <form>
                            <h2>New User Registration</h2>
                            {/* <!-- user input --> */}
                            <div className="row mb-3">
                                <label for="colFormLabel" className="col-sm-2 col-form-label">User Name :</label>
                                <div className="col-sm-10">
                                    <input type="text" class="form-control" id="colFormLabel" placeholder="User Full Name" value={userName}
                                        onChange={(e) => setUsername(e.target.value)} />
                                </div>
                            </div>
                            {/* <!-- phone input --> */}
                            <div className="row mb-3">
                                <label for="colFormLabel" className="col-sm-2 col-form-label">Phone NO :</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="colFormLabel" placeholder="Phone No" value={phoneNo}
                                        onChange={(e) => setPhone(e.target.value)} />
                                </div>
                            </div>
                            {/* <!-- email input --> */}
                            <div className="row mb-3">
                                <label for="colFormLabel" className="col-sm-2 col-form-label" >Email :</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="colFormLabel" placeholder="Email ex- xyx@gmail.com" value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                            {/* <!-- Password input --> */}
                            <div className="row mb-3">
                                <label for="colFormLabel" className="col-sm-2 col-form-label">Password :</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="colFormLabel" placeholder="password" value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                </div>
                            </div>
                            {/* <!-- Gender input --> */}
                            <FormControl>
                                <FormLabel id="demo-controlled-radio-buttons-group">Gender:</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={value}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                </RadioGroup>
                            </FormControl>
                            );

                            {/* <!-- Address input --> */}
                            <div className="col-12">
                                <label for="inputAddress2" className="form-label">Address</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={address}
                                    onChange={(e) => setAddress(e.target.value)} />
                            </div>
                            {/* <!-- Submit button --> */}
                            <button type="button" className="btn btn-primary btn-block mb-4" onClick={RegisterUser}>Submit</button>

                            <button type="button" className="btn btn-primary btn-block mb-4" onClick={(e) => setShowLogin(true)}>Login</button>
                        </form>

                    </Container>
            }
        </>
    )
}


export default Login




