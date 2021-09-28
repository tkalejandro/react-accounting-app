import React from "react";
import WelcomeLinks from "./WelcomeLinks/WelcomeLinks";
import "./WelcomeMessage.css"

const WelcomeMessage = (props) => {
    return (

        <section className="welcomeMessage">
            <h1>Welcome Message</h1>
            <div className="introMessage">
                <p>Hello <span className="nameValue">{props.state.userInitialInfo.name.toUpperCase()}</span>, welcome to myFinances!</p>
                <p>My name is Poring and I will be your bot helping you in taking care of your finances!</p>
                <p>Your initial balance is: <span className="balanceValue">{props.state.userInitialInfo.balance}€</span></p>
                <p>See you soon!</p>
                <p>Poring: (◕‿◕✿)</p>
            </div>
            <WelcomeLinks />
        </section>



    )
}

export default WelcomeMessage