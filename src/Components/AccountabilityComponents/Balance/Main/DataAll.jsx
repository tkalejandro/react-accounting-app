import React from "react";
import "./DataAll.css"
import { Link } from "react-router-dom";
const DataAll = (props) => {
    let data = props.data

    //current table = Will give the index. Default is 0
    // acountabilityLog = [[],[],[]...]
    let tableData = data.map(element => {
        return (

            <tr key={element.id} className="mainTableRow">
                <td className=""> {element.id}</td>
                <td className="tablet"> {element.type}</td>
                <td className=""> {element.category}</td>
                <td className="tablet"> {element.description}</td>
                <td className="tablet"> {element.quantity}</td>
                <td className="tablet"> {element.value}</td>
                <td> {element.expenses}</td>
                <td> {element.incomes}</td>
                <td>
                    <Link className="hiddenLink" to={`/home/balance/${element.id}`}></Link>
                </td>
            </tr>
        )
    })
    //I only reverse to see the last transaction
    return tableData.reverse()
}

export default DataAll