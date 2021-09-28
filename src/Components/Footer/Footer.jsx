import React from "react";
import "./Footer.css"
import DCILogo from "../../Assets/DCI-Digital-Career-Institute-Logo.png"


const Footer = () => {
    return (
        <footer>
            <section className="madeBy">
                <h2>Made by:</h2>
                <p>J. Alejandro Coronado</p>
                <a href="https://tkalejandro.github.io/" target="_blank" rel="noopener noreferrer">Portfolio</a>
            </section>

            <section className="techEducation">
                <h2>Tech Education</h2>
                <img src={DCILogo} alt="Logo from Digital Career Institute" />
                <p>DCI Digital Career Institute 2021-2022 Web-Developer Germany</p>
            </section>



        </footer>
    )
}

export default Footer