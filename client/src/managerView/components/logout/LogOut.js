import "./LogOut.css"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { Popup, PopupFunction } from "../popup/Popup";

const LogOut = () => {
    let navigate = useNavigate();
    
    useEffect(() => {
        if(document.querySelector(".ht_popup ~ .nav_bar") !== null){
            document.querySelector(".ht_popup ~ .nav_bar").style.display = "none"
        }
        
        PopupFunction("Are you sure you want to log out?", "yes no")();

        document.querySelector(".ht_popup .btn_yes").addEventListener("click", () => {
            handleClick()
        })

        document.querySelector(".ht_popup .btn_no").addEventListener("click", () => {
            if(document.querySelector(".ht_popup ~ .nav_bar") !== null){
                document.querySelector(".ht_popup ~ .nav_bar").style.display = ""
            }
            navigate('/home')
        })
    }, []);

    const handleClick = (e) => {

        localStorage.clear();
        // console.log('wa');
        // window.location.reload();

        navigate('/blank');
        navigate('/');
        window.location.reload();

    }

    return(
        <>
        <Popup/>

        {/* <div className="logout_page">
            <h3>Are you sure you want to log out?</h3>

            <div className="logoutFlex">
                <button className="logoutBtn" onClick={()=>{handleClick()}}>Yes</button>
                <button onClick={()=>{navigate('/home')}}>No</button>
            </div>
        </div> */}
        </>
    )
}

export default LogOut;