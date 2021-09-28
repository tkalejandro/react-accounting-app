import React from "react";
import { Link } from "react-router-dom";
import MainBalance from "../Components/AccountabilityComponents/Balance/Main/MainBalance";
import NewEntry from "../Components/FunctionsMenu/NewEntry";

const UserBalance = (props) => {
    return (
        <>
            <h1>User Balance Page</h1>
            <MainBalance data={props.state} />
            <Link to="/home"> Go Back</Link>
            <NewEntry
                data={props.state}
                updateAccountabilityLog={props.updateAccountabilityLog}
                updateState={props.updateState}
                rule="all"
            />

        </>
    )
}

export default UserBalance