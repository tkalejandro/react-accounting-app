import React from "react";

const DataPreview = (props) => {
    let  data = props.data

    //current table = Will give the index. Default is 0
    // acountabilityLog = [[],[],[]...]
    let tableData = data.map(element => {
        return (
            <tr key={element.id}>
                <td className="tablet"> {element.id}</td>
                <td className="tablet"> {element.type}</td>
                <td className=""> {element.category}</td>
                <td className="tablet"> {element.description}</td>
                <td className="tablet"> {element.quantity}</td>
                <td className="tablet"> {element.value}</td>
                <td> {element.expenses}</td>
                <td> {element.incomes}</td>
            </tr>
        )
    })
    //Im reversing the table hear to see the last items that were inside and then  slice to see just a preview and not the total. 
    return tableData.reverse().slice(0,7)
}

export default DataPreview