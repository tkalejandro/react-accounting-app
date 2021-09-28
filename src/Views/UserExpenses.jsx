import React from "react";
import { Link } from "react-router-dom";
import MainExpenses from "../Components/AccountabilityComponents/Expenses/MainExpenses";
import NewEntry from "../Components/FunctionsMenu/NewEntry";
const UserExpenses = (props) => {
    return(
        <>
            <h1>User Expenses Page</h1>
            <MainExpenses state={props.state} />
            <Link to="/home"> Go Back</Link>
            <NewEntry
                data={props.state}
                updateAccountabilityLog={props.updateAccountabilityLog}
                updateState={props.updateState}
                rule="expense"
            />
        </>
    )
}

export default UserExpenses