import React from "react"

const MainTableHead = () => {
    return (
        <thead>
            <tr className="mainHeadRow">
                <th className="">ID</th>
                <th className="tablet">Type</th>
                <th>Category</th>
                <th className="tablet">Description</th>
                <th className="tablet">Quantity</th>
                <th className="tablet">Value</th>
                <th>Expenses</th>
                <th>Incomes</th>
                {/* This is for the Links */}
                <th className="hiddenLinkTableHead"></th>
            </tr>

        </thead>
    )
}

export default MainTableHead