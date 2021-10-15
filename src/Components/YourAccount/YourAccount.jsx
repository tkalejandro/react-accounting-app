import React from "react";
import "./YourAccount.css"
import YourAccountTables from "./YourAccountTables";

const YourAccount = (props) => {

    let data = props.state


    return (
        <section className="yourAccountContainer">
            <h1>Your Account</h1>
            <p>Hello! <span>{data.userInitialInfo.name}</span></p>
            <section>
                <h2>Account details</h2>
                <ul>
                    <li><span>Your name:</span> {data.userInitialInfo.name}</li>
                    <li><span>Your last name:</span> {data.userInitialInfo.lastName}</li>
                    <li><span>Number of interactions:</span> {data.interactionCounter}</li>
                    <li><span>Number of tables:</span> {data.accountabilityLog.length}</li>
                </ul>
            </section>
            <section className="sectionTableBlock">
                <h2>Your tables</h2>
                <YourAccountTables
                    tables={data.accountabilityLog}
                    deleteTable={props.deleteTable}
                />
            </section>
        </section>
    )
}

export default YourAccount