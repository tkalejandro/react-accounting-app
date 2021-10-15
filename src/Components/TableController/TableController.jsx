import React, {useEffect , useContext} from "react";
import "./TableController.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faTable } from "@fortawesome/free-solid-svg-icons";
import NewTableForm from "../FunctionsMenu/NewTableForm";
//import FinanceContext from "../../context/FinanceContext";
const TableController = (props) => {
   // const { state , tableBackward ,tableForward , updateState , addNewTable} = useContext(FinanceContext)
   
    const newTableFormRef = React.createRef()

    let data = props.state
    let fullName = `${data.userInitialInfo.name} ${data.userInitialInfo.lastName}`
    //....................accountability log > table 0 > First element of the log contains the table title key.
    console.log(data.accountabilityLog[data.currentTable][0].tableTitle)
    let tableTitle = data.accountabilityLog[data.currentTable][0].tableTitle



    //In this function we will create a logic that allow us to identify each time we reach our limit.
    //Never less than 0 , never more than array length.
    //Lets create the references



    const setArrowClassLeft = () => {
        //No more tables backwards
        if (data.currentTable <= 0) {
            return ("arrows-left arrowOff")
        } else
            return ("arrows-left arrowOn")
    }
    const setArrowClassRight = () => {
        //No more tables forward
        if (data.currentTable >= data.accountabilityLog.length - 1) {
            return ("arrows-right arrowOff")
        } else
            return ("arrows-right arrowOn")
    }


    const closeNewTableForm = () => {
        newTableFormRef.current.style.display = "none"
    }
    const openNewTableForm = () => {
        newTableFormRef.current.style.display= "flex"
    }
    return (
        <section className="tableControllerContainer">
            <h1 className="userFullName">{fullName}</h1>

            <div className="currentTableContainer">
                <h2 className="tableTitle">{tableTitle}</h2>
                <FontAwesomeIcon icon={faArrowLeft} className={setArrowClassLeft()} onClick={props.tableBackward} />
                <FontAwesomeIcon icon={faArrowRight} className={setArrowClassRight()} onClick={props.tableForward} />
            </div>
            <div className="newTableContainer" onClick={openNewTableForm}>
                <span className="plus">+</span>
                <FontAwesomeIcon icon={faTable} />
            </div>


            <NewTableForm 
                newTableFormRef={newTableFormRef}
                closeNewTableForm={closeNewTableForm}
                updateState={props.updateState}
                data={data.newTable}
                addNewTable={props.addNewTable}
            />
        </section>
    )
}

export default TableController