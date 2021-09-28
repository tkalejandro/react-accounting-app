import React from "react";
import MainTableHead from "../Balance/Main/MainTableHead";
import DataAll from "../Balance/Main/DataAll";
import TotalCalculation from "../Balance/TotalCalculation";

const MainIncomes = (props) => {
    let data = props.state
    
    
    //Lets Filter to only see the Incomes!
    let onlyIncomes = data.accountabilityLog[data.currentTable].filter(element => element.type === "income")

    return(
        <section className="mainBalanceContainer">

            <table className="table">
                <caption>{data.userInitialInfo.name}'s Incomes</caption>
                <MainTableHead />
                <tbody>
                    <DataAll data={onlyIncomes}/>
                </tbody>
            </table>
            {/* Accountability[0] */}
            <TotalCalculation data={onlyIncomes}/>
        </section>
    )
}

export default MainIncomes