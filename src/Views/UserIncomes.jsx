import React from "react";
import { Link } from "react-router-dom";
import MainIncomes from "../Components/AccountabilityComponents/Incomes/MainIncomes";
import NewEntry from "../Components/FunctionsMenu/NewEntry";
const UserIncomes = (props) => {
    return(
        <>
            <h1>User Incomes Page</h1>
            <MainIncomes state={props.state} />
            <Link to="/home"> Go Back</Link>
            <NewEntry
                data={props.state}
                updateAccountabilityLog={props.updateAccountabilityLog}
                updateState={props.updateState}
                rule="income"
            />
        </>

        
    )
}

export default UserIncomes