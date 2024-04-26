import { useState, useEffect} from "react";
import {auth} from '../config/fb-config';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate} from "react-router-dom"

let Login = () => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    const [error, setError] = useState(``);
    const navigate = useNavigate();
    const useremail = localStorage.getItem(`useremail`);
    const login = async () => {
        console.log(email, password)
        await signInWithEmailAndPassword(auth, email , password)
        .then(user => {
            console.log(user.user)
            localStorage.setItem(`useremail`, email)
            navigate("/dashboard");
        })
        .catch(error => {
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
            <h1>Login User</h1>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
            <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br />
            <button onClick={login}>Login</button> <br />
            <Link to="/register"> register now! </Link>
        </div>
    )
}

export default Login;
