import React from "react";
import "./Balance.css"
import DataPreview from "./DataPreview";
import TableHead from "./TableHead";
import TotalCalculation from "./TotalCalculation";

const Balance = (props) => {
    let data = props.state
    
    return (
        <section className="balanceContainer">

            <table className="table">
                <caption>{data.userInitialInfo.name}'s Balance Sheet</caption>
                <TableHead />
                <tbody>
                    <DataPreview data={data.accountabilityLog[data.currentTable]}/>
                </tbody>
            </table>
            {/* Accountability[0] */}
            <TotalCalculation data={data.accountabilityLog[data.currentTable]}/>
        </section>
    )
}


export default Balance