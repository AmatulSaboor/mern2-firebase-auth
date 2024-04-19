import {auth} from '../config/fb-config';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
let Register = () =>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const register = async () =>{
        await createUserWithEmailAndPassword(auth,email,password);
    }
    return (
        <>
            <div>
                <h1>Register User</h1>
                <input type="text" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} />
                <input type="text" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
                <button onClick={register}>Register</button>
                
            </div>
        </>
    )
}

export default Register;
