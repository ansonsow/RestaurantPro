import "./LogOut.css"

const handleClick = (e) => {
    e.preventDefault();
    console.log("wa");
    localStorage.clear();
    window.location.reload();
}

const LogOut = () => {
    return(
        <div className="logout_page">
            <h3>Are you sure you want to log out?</h3>

            <div className="logoutFlex">
                <button className="logoutBtn" onClick={handleClick}>Yes :)</button>
                <button>No :(</button>
            </div>
            

        </div>
    )
}

export default LogOut;