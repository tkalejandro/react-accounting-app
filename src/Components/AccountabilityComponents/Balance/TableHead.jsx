import React from "react"

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th className="tablet">ID</th>
                <th className="tablet">Type</th>
                <th>Category</th>
                <th className="tablet">Description</th>
                <th className="tablet">Quantity</th>
                <th className="tablet">Value</th>
                <th>Expenses</th>
                <th>Incomes</th>
            </tr>

        </thead>
    )
}

export default TableHead