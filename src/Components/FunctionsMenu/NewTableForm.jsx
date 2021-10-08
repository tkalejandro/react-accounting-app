import React from "react";
import "./NewTableForm.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const NewTableForm = (props) => {

    const submitNewTable = (event) => {
        event.preventDefault()

        props.addNewTable()
        alert("New Table Added")
        props.closeNewTableForm()
    }

    return (
        <div className="newTableFormContainer" ref={props.newTableFormRef}>
            <form className="newTableForm" onSubmit={submitNewTable}>
                <h2 className="title">New Table</h2>
                <input 
                name="newTableTitle" 
                placeholder="Table Title" 
                onChange={props.updateState}
                value={props.data.title}   
                />
                <input 
                type="number" 
                name="newTableBalance" 
                placeholder="Initial Balance" 
                onChange={props.updateState}
                value={props.data.balance}  
                />
                <button>Add New Table</button>
            </form>
            <span className="close" onClick={props.closeNewTableForm}>
                <FontAwesomeIcon icon={faTimesCircle}/>
            </span>
        </div>
    )
}

export default NewTableForm