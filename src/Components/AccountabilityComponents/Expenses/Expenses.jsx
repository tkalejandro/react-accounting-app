import React from "react";
import TableHead from "../Balance/TableHead";
import DataPreview from "../Balance/DataPreview";
import TotalCalculation from "../Balance/TotalCalculation";

const Expenses = (props) => {
    let data = props.state
   
    
    //Lets Filter to only see the Expenses!
    let onlyExpenses = data.accountabilityLog[data.currentTable].filter(element => element.type === "expense")

    return(
        <section className="balanceContainer">

            <table className="table">
                <caption>{data.userInitialInfo.name}'s Expenses</caption>
                <TableHead />
                <tbody>
                    <DataPreview data={onlyExpenses}/>
                </tbody>
            </table>
            {/* Accountability[0] */}
            <TotalCalculation data={onlyExpenses}/>
        </section>
    )
}

export default Expenses