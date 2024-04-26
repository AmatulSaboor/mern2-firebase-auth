import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"
import {auth} from '../config/fb-config';
import {createUserWithEmailAndPassword} from 'firebase/auth';

let Register = () => {
    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);
    const [error, setError] = useState(``);
    const navigate = useNavigate();
    const useremail = localStorage.getItem(`useremail`);
    const reset = () => {
        setPassword(``)
        setEmail(``)
    }
    const register = async () => {
        // console.log(email)
        await (console.log(email, password), createUserWithEmailAndPassword(auth, email, password))
        .then(user => {
            console.log(user.user)
            reset();
            localStorage.setItem(`useremail`, email)
            navigate("/dashboard");
            })
        .catch(error => 
            {
                console.log(error.message)
                setError(error.message)
            })
    }
    useEffect(() => {
         if (useremail) 
         navigate(`/dashboard`)
     }, [navigate, useremail])

    return(
        <div>
            {error && <span style={{color:"red"}}>{error}</span>}
            <h1>Register User</h1>
            <input type="text" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} /><br />
            <input type="text" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} /><br />
            <button onClick={register}>Register</button> <br />
            <Link to="/login"> already a user?? </Link>
        </div>
    )
}

export default Register;
