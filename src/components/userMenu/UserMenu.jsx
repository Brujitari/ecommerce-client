import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useGetter } from "store"
import { useLogout } from "hooks"

function UserMenu() {
    const navigate = useNavigate();
    const logout = useLogout({ onSuccess: () => navigate("/login") });
    const handleClick = () => logout();
    
    const { user } = useGetter();

    return (
        <div className='userMenu'>
            {user ? (<div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {user.first_name}
                </button>
                <ul className="dropdown-menu">
                    <button className="dropdown-item" onClick={handleClick}>Logout</button>
                </ul>
            </div>)
                :
                <Link to="/login"> Login </Link>}
        </div>
    )
}

export default UserMenu