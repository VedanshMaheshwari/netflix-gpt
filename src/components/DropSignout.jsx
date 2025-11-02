import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase.js';

const DropSignout = () => {
    
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
        }).catch((error) => {
        // An error happened.
            navigate("/Browse");
        });
    };

    return (
        <div className="dropdown">
            <ul className="dropdown-content">
                <li className="dropdown-profile">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="profile" className="dropdown-avatar" />
                  {/* <span>{userName}</span> */}
                </li>
                <li className="dropdown-item">Account</li>
                <li className="dropdown-item">Help Centre</li>
                <li className="dropdown-divider" />
                <li className="dropdown-item" onClick={handleSignOut}>Sign Out</li>
            </ul>
        </div>
    )
}

export default DropSignout;