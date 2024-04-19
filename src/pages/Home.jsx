import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

let Home = () => {
    const useremail = localStorage.getItem(`useremail`);
    const navigate = useNavigate();
    useEffect(
       () => {
        if (useremail) 
        navigate(`/dashboard`)
    }, [navigate, useremail])
    return(
        <>
            This is Home Page
            <Link to="/login"> login </Link>
            <Link to="/register"> register </Link>
        </>
    )
}

export default Home;