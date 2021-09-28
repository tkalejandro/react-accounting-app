import React from "react";
import Status from "../Components/Status/Status";

import WelcomeMessage from "../Components/WelcomeMessage/WelcomeMessage";


const IntroMessage = (props) => {

    return (
        <>
            <Status state={props.state} />
            <WelcomeMessage state={props.state} />

        </>
    )
}

export default IntroMessage