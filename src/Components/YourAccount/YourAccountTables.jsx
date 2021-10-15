import React from "react";

const YourAccountTables = (props) => {

    let tables = props.tables

    let tableBlocks = tables.map((table, index) => {
        //Lets create some logic to avoid index 0 get the option to delete.
        //Is the main, it should never happen.

        return (
            <div key={index} className="tableBlock">
                <span>{table[0].tableTitle}</span>
                {index !== 0
                    ? <span id={index} className="deleteTableBtn" onClick={props.deleteTable}> X </span>
                    : <></>
                }
            </div>
        )
    })

    return (
        <div className="tableBlocksContainer">
            {tableBlocks}
        </div>
    )
}

export default YourAccountTables