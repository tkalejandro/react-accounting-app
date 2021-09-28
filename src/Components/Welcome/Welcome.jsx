import React, { createRef, useEffect } from "react";
import "./Welcome.css"
import { Link } from "react-router-dom";



const Welcome = (props) => {
    const nameError = createRef()
    const lastNameError = createRef()
    const initialBalanceEmptyError = createRef()
    const initialBalanceError = createRef()

    const submit = createRef()

    useEffect(() => {
        if (props.state.userInitialInfo.name.length !== 0 &&
            props.state.userInitialInfo.lastName.length !== 0 &&
            props.state.userInitialInfo.balance > 0 &&
            props.state.userInitialInfo.balance !== "") {

            
            submit.current.className = "btnSubmitErrorFalse"
        } else {
            submit.current.className = "btnSubmitErrorTrue"
            props.state.currentStatus = ""
        }
    })

    const updateStatusInitialBalance = () => {
        props.updateStatusInitialBalance()
    }
    


    const checkForErrors = (event) => {
        switch (event.target.name) {
            case "name":
                event.target.value.trim().length === 0 ? nameError.current.style.display = "block" : nameError.current.style.display = "none"
                break
            case "lastName":
                event.target.value.trim().length === 0 ? lastNameError.current.style.display = "block" : lastNameError.current.style.display = "none"
                break
            case "initialBalance":
                event.target.value <= 0 ? initialBalanceError.current.style.display = "block" : initialBalanceError.current.style.display = "none"
                event.target.value === "" ? initialBalanceEmptyError.current.style.display = "block" : initialBalanceEmptyError.current.style.display = "none"
                break
            default:
                break
        }
    }


    return (
        <div className="welcome">
            <h1>Welcome</h1>
            <p>Lets get started!</p>


            <form>
                <input placeholder="Your name" name="name" onBlur={checkForErrors} onChange={props.updateState} value={props.state.userInitialInfo.name} />
                <div ref={nameError} className="errorMessage">Please write your name.</div>

                <input placeholder="Your Last name" name="lastName" onBlur={checkForErrors} onChange={props.updateState} value={props.state.userInitialInfo.lastName} />
                <div ref={lastNameError} className="errorMessage">Please write your last name.</div>

                <input type="number" placeholder="Whats your initial balance?" name="initialBalance" onBlur={checkForErrors} onChange={props.updateState} value={props.state.userInitialInfo.balance} />
                <div ref={initialBalanceEmptyError} className="errorMessage">Please write an initial balance. Ex: 380.49</div>
                <div ref={initialBalanceError} className="errorMessage">Not 0 or less! Check your wallet :-)</div>


                <div className="btnContainer">
                    <Link ref={submit} to={"/welcome/intro"} onClick={updateStatusInitialBalance}>Submit</Link>
                    <Link to={"/"} className="btnGoBack">Go Back</Link>
                </div>


            </form>
        </div>
    )
}

export default Welcome