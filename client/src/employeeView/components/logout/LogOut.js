import "./LogOut.css"
import { useNavigate } from "react-router-dom";

const LogOut = () => {
    let navigate = useNavigate(); 

    const handleClick = (e) => {

        localStorage.clear();
        console.log('wa');
        // window.location.reload();

        navigate('/blank');
        navigate('/home');
        window.location.reload();


    }

    return(
        <div className="logout_page">
            <h3>Are you sure you want to log out?</h3>

            <div className="logoutFlex">
                {/* <Link to="/" className="logoutBtn" onClick={handleClick}>Yes</Link> */}
                <button className="logoutBtn" onClick={()=>{handleClick()}}>Yes</button>
                <button onClick={()=>{navigate('/home')}}>No</button>
            </div>
            

        </div>
    )
}

export default LogOut;