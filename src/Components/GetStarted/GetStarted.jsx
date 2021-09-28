import React from "react"
import "./GetStarted.css"
import { Link } from "react-router-dom"
import { root } from "../.."

const GetStarted = () => {
    const rewriteRootClass = () => {
        root.classList.remove("rootWelcome")
        root.classList.add("root")
    }

    return (
        <div className="getStarted">
            <h1>myFinances</h1>
            <p><em>Easy and Simple</em></p> 
            <div className="linksContainer">
                <Link to={"/welcome"} className="getStartedBtn">Get Started</Link> 
                <Link to={"/home"} className="exampleBtn" onClick={rewriteRootClass}>Example</Link> 
            </div>

        </div>
    )

}

export default GetStarted