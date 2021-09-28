import React from "react"
import "./Status.css"

const Status = (props) => {

    return (
        <section className="statusContainer">
                <p>Status:</p>
                <p>{props.state.currentStatus}</p>
        </section>
    )
}

export default Status