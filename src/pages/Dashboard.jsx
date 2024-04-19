import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

let Dashboard = () => {
    const navigate = useNavigate();
    const useremail = localStorage.getItem(`useremail`);
    const logout = () => {
        localStorage.removeItem(`useremail`);
        navigate(`/`)
    }

    useEffect(() => {
         if (!useremail) 
         navigate(`/`)
    }, [navigate, useremail])

    return(
        <>
            This is Dashboard
            <br />
            Welocme {useremail}
            <button onClick={logout}>logout</button>
        </>
    )
}

export default Dashboard;