import React from "react"
import YourAccount from "../Components/YourAccount/YourAccount"

const Account = (props) => {

    
    return (
        <>
        <YourAccount 
        state={props.state}
        deleteTable={props.deleteTable}
         />
        </>
    )
}

export default Account