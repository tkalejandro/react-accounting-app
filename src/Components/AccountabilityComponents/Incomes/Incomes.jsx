import React from "react";
import TableHead from "../Balance/TableHead";
import DataPreview from "../Balance/DataPreview";
import TotalCalculation from "../Balance/TotalCalculation";

const Incomes = (props) => {
    let data = props.state
    
    
    //Lets Filter to only see the Incomes!
    let onlyIncomes = data.accountabilityLog[data.currentTable].filter(element => element.type === "income")

    return(
        <section className="balanceContainer">

            <table className="table">
                <caption>{data.userInitialInfo.name}'s Incomes</caption>
                <TableHead />
                <tbody>
                    <DataPreview data={onlyIncomes}/>
                </tbody>
            </table>
            {/* Accountability[0] */}
            <TotalCalculation data={onlyIncomes}/>
        </section>
    )
}

export default Incomes