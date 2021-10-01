import React, { createRef, useState } from "react";
import { Link } from "react-router-dom";

import "./DataSingleItem.css"

const DataSingleItem = (props) => {
    let data = props.singleData
    let arrayLength = props.arrayLength




    const deleteItem = () => {

        if (arrayLength > 1) {
            props.deleteLastEntry()
        } else {
            alert("you cant delete initial Balance!")
        }
    }
    const printCorrectTotal = () => {
        switch (data.type) {
            case"initial":
                return <>{data.incomes}</>
            case "income":
                return <>{data.incomes}</>
            case "expense":
                return <>{data.expenses}</>
            default:
                break
        }
    }
    const printFunctions = () => {
        //This is to make sure only the last item has the function to delete!
        //This is to avoid deleting the initial balance which is always the first item.
        if (arrayLength - 1 === Number(data.id) && arrayLength > 1) {
            return (
                <>
                    <button>Edit Item</button>
                    <Link to="/home/balance">
                        <button onClick={deleteItem}>Delete Item</button>
                    </Link>
                </>
            )
        } else {
            return <button>Edit Item</button>
        }
    }
    return (
        <section className="dataSingleItemContainer">
            <h1>Item description</h1>
            {/* <table className="table">
                <caption>Sequence {data.id}</caption>
                <thead>
                    <tr className="rowHidden">
                        <th>Item</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Type:</td>
                        <td>{data.type}</td>
                    </tr>
                    <tr>
                        <td>Category</td>
                        <td>{data.category}</td>
                    </tr>
                    <tr>
                        <td>Description:</td>
                        <td>{data.description}</td>
                    </tr>
                    <tr>
                        <td>Quantity</td>
                        <td>{data.quantity}</td>
                    </tr>
                    <tr>
                        <td>Single value:</td>
                        <td>{data.value} €</td>
                    </tr>
                    <tr>
                        <td>Total:</td>
                        <td>{printCorrectTotal()} €</td>
                    </tr>
                </tbody>
            </table> */}
            <div className="functionsContainer">
                {printFunctions()}
            </div>
            <div className="singleItemLinksContainer">
                <Link to="/home/expenses">Expenses ←</Link>
                <Link to="/home/balance">Balance ←</Link>
                <Link to="/home/incomes">Incomes ←</Link>
            </div>

        </section>
    )
}

export default DataSingleItem