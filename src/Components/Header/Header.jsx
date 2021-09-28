import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.css"
import Logo from "./Logo";


const Header = () => {
    return (
        <header>
            <div className="headerContainer">
                <Logo />
                <Navigation />
            </div>
            


        </header>
    )
}

export default Header