import React from "react";
import MainTableHead from "../Balance/Main/MainTableHead";
import DataAll from "../Balance/Main/DataAll";
import TotalCalculation from "../Balance/TotalCalculation";

const MainExpenses = (props) => {
    let data = props.state
    
    
    //Lets Filter to only see the Incomes!
    let onlyExpenses = data.accountabilityLog[data.currentTable].filter(element => element.type === "expense")

    return(
        <section className="mainBalanceContainer">

            <table className="table">
                <caption>{data.userInitialInfo.name}'s Expenses</caption>
                <MainTableHead />
                <tbody>
                    <DataAll data={onlyExpenses}/>
                </tbody>
            </table>
            {/* Accountability[0] */}
            <TotalCalculation data={onlyExpenses}/>
        </section>
    )
}

export default MainExpenses