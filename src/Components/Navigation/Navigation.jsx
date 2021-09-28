import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"

const Navigation = () => {
    return (
        <nav className="navHeader">
            <Link to="/home">Home</Link>
            <Link to="/account">Account</Link>
            <Link to="/faqs">FAQs</Link>
         </nav>
    )
}

export default Navigation
