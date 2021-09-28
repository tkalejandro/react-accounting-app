import React from "react";
import MainTableHead from "./MainTableHead";
import TotalCalculation from "../TotalCalculation";
import DataAll from "./DataAll";
import "./MainBalance.css"


const MainBalance = (props) => {
    let data = props.data

    return (
        <section className="mainBalanceContainer">

            <table className="table">
                <caption>{data.userInitialInfo.name}'s Balance Sheet</caption>
                <MainTableHead />
                <tbody>
                    <DataAll data={data.accountabilityLog[data.currentTable]}/>
                </tbody>
            </table>
            {/* Accountability[0] */}
            <TotalCalculation data={data.accountabilityLog[data.currentTable]}/>
        </section>
    )
}

export default MainBalance