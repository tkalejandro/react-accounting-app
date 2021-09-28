import React from "react";
import Welcome from "../Components/Welcome/Welcome";

const PreSettings = (props) => {

    return(
        <>
            <Welcome updateState={props.updateState} state={props.state} updateStatusInitialBalance={props.updateStatusInitialBalance}/>
        </>
    )
}

export default PreSettings