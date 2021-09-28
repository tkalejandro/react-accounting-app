import React from "react";
import "./WelcomeLinks.css"
import { Link } from "react-router-dom";
import { root } from "../../..";


const WelcomeLinks = () => {
    const rewriteRootClass = () => {
        root.classList.remove("rootWelcome")
        root.classList.add("root")
    }
    return(
        <div className="welcomeLinksMenu">
                <Link className="checkLog" to="/home" onClick={rewriteRootClass}>Check Log</Link>
                <Link className="checkMenu" to="/faqs" onClick={rewriteRootClass}>Help</Link>

        </div>
    )
}

export default WelcomeLinks