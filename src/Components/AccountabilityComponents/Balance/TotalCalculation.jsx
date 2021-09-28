import React, { useEffect, createRef } from "react"
import "./TotalCalculation.css"

const TotalCalculation = (props) => {
    let data = props.data
    let balance = data.reduce((acc, crr) => acc + Number(crr.incomes) + (Number(crr.expenses) * -1), 0)
    const totalCalculation = createRef()
    useEffect(() => {
        balance > 0
            ? totalCalculation.current.className = "totalCalculation positiveValue"
            : balance === 0
                ? totalCalculation.current.className = "totalCalculation neutralValue"
                : totalCalculation.current.className = "totalCalculation negativeValue"
    })
    return (
        <div ref={totalCalculation} className="totalCalculation">{balance} €</div>
    )
}

export default TotalCalculation