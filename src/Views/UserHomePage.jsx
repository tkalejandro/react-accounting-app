import React from "react";
import Balance from "../Components/AccountabilityComponents/Balance/Balance";
import Incomes from "../Components/AccountabilityComponents/Incomes/Incomes";
import Expenses from "../Components/AccountabilityComponents/Expenses/Expenses";
import { Link } from "react-router-dom";


const UserHomePage = (props) => {
    console.log("userHomePage ----> Current Table:",props.state.currentTable)
    return (
        <>
            <Link className="homeLinks" to="/home/balance">
                <Balance state={props.state} />
            </Link>
            <Link className="homeLinks" to="/home/incomes">
                <Incomes state={props.state} />
            </Link>
            <Link className="homeLinks" to="/home/expenses">
                <Expenses state={props.state} />
            </Link>



        </>

    )
}

export default UserHomePage