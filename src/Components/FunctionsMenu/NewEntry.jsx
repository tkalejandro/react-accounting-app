import React, { useState } from "react";
import "./NewEntry.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import NewEntryForm from "./NewEntryForm";
const NewEntry = props => {

    const modal = React.createRef()
    const background = React.createRef()
    
    const [menuOpen, setMenuOpen] = useState(false)

    const openMenu = () => {
        
        if (menuOpen === false) {
            modal.current.style.display = "block"
            background.current.style.display = "block"
            setMenuOpen(true)
            

        } else if (menuOpen === true) {
            modal.current.style.display = "none"
            background.current.style.display = "none"
            setMenuOpen(false)
        }
    }

    return (
        <>  
            <FontAwesomeIcon icon={menuOpen ? faTimes : faPlus} className="plusBtn" onClick={openMenu} />

            <NewEntryForm
                rule={props.rule}
                data={props.data}
                updateAccountabilityLog={props.updateAccountabilityLog}
                updateState={props.updateState}
                modal={modal}
                background={background}
            />
        </>
    )
}

export default NewEntry