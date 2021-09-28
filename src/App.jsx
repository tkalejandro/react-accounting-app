import React, { useReducer, createContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import exampleData from "./Assets/exampleData";
import MyFinances from "./Views/MyFinances";
import PreSettings from "./Views/PreSettings";
import IntroMessage from "./Views/IntroMessage"
import UserHomePage from "./Views/UserHomePage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Account from "./Views/Account";
import FAQs from "./Views/FAQs";
import UserBalance from "./Views/UserBalance";
import UserExpenses from "./Views/UserExpenses";
import UserIncomes from "./Views/UserIncomes";
import UserBalanceSingleView from "./Views/userBalanceSingleView";

// export const StateContext = createContext()



const initialState = {
    currentStatus: "",

    userInitialInfo: {
        name: "John",
        lastName: "Smith",
        balance: ""
    },
    //Tables     
    //accountabilityLog: [],
    currentTable: 0,
    //Example!
    //[[{}], [{}]]
    accountabilityLog: [exampleData],
    //newEntryFormat
    newEntry: {
        //We setup the first item which is alway 0. Making easier to setup the next id with length.
        id: "",
        type: "",
        category: "",
        description: "",
        quantity: "",
        value: "",
        incomes: "",
        expenses: ""
    },

    //Booleans
    premiumAccount: false,
    initialBalanceConfigured: false,
    //Collecting Data
    interactionCounter: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case "updateName":
            return { ...state, userInitialInfo: { ...state.userInitialInfo, name: action.payLoad } }
        case "updateLastName":
            return { ...state, userInitialInfo: { ...state.userInitialInfo, lastName: action.payLoad } }
        case "updateInitialBalance":
            return { ...state, userInitialInfo: { ...state.userInitialInfo, balance: action.payLoad } }
        case "statusInitialBalance":
            return {
                ...state,
                currentStatus: "Initial Balance Added   (づ｡◕‿‿◕｡)づ",
                //Is starting an Array inside an array because its the way i can create more different tables.
                //Current table will be in charge to refer the index.
                accountabilityLog: [
                    [
                        {
                            id: 0,
                            type: "initial",
                            category: "balance",
                            description: "",
                            quantity: "1",
                            value: state.userInitialInfo.balance,
                            expenses: "",
                            incomes: state.userInitialInfo.balance,
                        }
                    ]
                ],
                initialBalanceConfigured: true
            }
        case "addNewEntryType":
            return { ...state, newEntry: { ...state.newEntry, type: action.payLoad } }
        case "addNewEntryCategory":
            return { ...state, newEntry: { ...state.newEntry, category: action.payLoad } }
        case "addNewEntryDescription":
            return { ...state, newEntry: { ...state.newEntry, description: action.payLoad } }
        case "addNewEntryQuantity":
            return { ...state, newEntry: { ...state.newEntry, quantity: action.payLoad } }
        case "addNewEntryValue":
            return { ...state, newEntry: { ...state.newEntry, value: action.payLoad } }
        case "deleteLastEntry":
            let newLog = [...state.accountabilityLog]
            console.log("newLog", newLog)
            newLog[state.currentTable].pop()
            alert("Item deleted")
            return {...state, accountabilityLog: newLog}
        case "updateAccountabilityLog":
            //This is the [[{}],[{}],[{}]]
            //This way we clone the array
            let newAccountabilityLog = [...state.accountabilityLog]
            //Select the newEntry Object {}
            let newEntryObject = state.newEntry
            //Lets insert new ID using easily length because we create index 0 for this app.
            newEntryObject.id = state.accountabilityLog[state.currentTable].length

            //Now Lets assign the total value to INCOME or EXPENSE checking the type
            switch (newEntryObject.type) {
                case "income": 
                    newEntryObject.incomes = newEntryObject.quantity * newEntryObject.value
                    break
                case "expense":
                    newEntryObject.expenses = newEntryObject.quantity * newEntryObject.value
                    break
                default:
                    break  
            }
            

            //Now lets join the new object to their respective table using Push()
            //mainTable[0].....secondTable[1]
            newAccountabilityLog[state.currentTable].push(newEntryObject)

            //Now lets merge and reset values
            return {
                ...state, accountabilityLog: newAccountabilityLog, newEntry: {
                    id: "",
                    type: "",
                    category: "",
                    description: "",
                    quantity: "",
                    value: "",
                    incomes: "",
                    expenses: ""
                }
            }
        case "statusIncomeAdded":
            return { ...state, currentStatus: "Expense Added   (づ｡◕‿‿◕｡)づ" }
        case "statusExpenseAdded":
            return { ...state, currentStatus: "Income Balance Added   (づ｡◕‿‿◕｡)づ" }
        default:
            break
    }
}
const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const updateState = (event) => {
        switch (event.target.name) {
            case "name":
                dispatch({ type: "updateName", payLoad: event.target.value })
                break
            case "lastName":
                dispatch({ type: "updateLastName", payLoad: event.target.value })
                break
            case "initialBalance":
                dispatch({ type: "updateInitialBalance", payLoad: event.target.value })
                break
            //New Entry Cases
            case "newEntryType":
                dispatch({ type: "addNewEntryType", payLoad: event.target.value })
                break
            case "newEntryCategory":
                dispatch({ type: "addNewEntryCategory", payLoad: event.target.value })
                break
            case "newEntryDescription":
                dispatch({ type: "addNewEntryDescription", payLoad: event.target.value })
                break
            case "newEntryQuantity":
                dispatch({ type: "addNewEntryQuantity", payLoad: event.target.value })
                break
            case "newEntryValue":
                dispatch({ type: "addNewEntryValue", payLoad: event.target.value })
                break
            default:
                break
        }

    }
    const editItem = () => dispatch({type: "editItem"})
    const deleteLastEntry = () => dispatch({ type: "deleteLastEntry" })
    const updateAccountabilityLog = () => dispatch({ type: "updateAccountabilityLog" })
    const updateStatusInitialBalance = () => dispatch({ type: "statusInitialBalance" })
    const updateStatusIncome = () => dispatch({ type: "statusIncomeAdded" })
    const updateStatusExpense = () => dispatch({ type: "statusExpenseAdded" })
    console.log("initialState:", state)
    return (

        <Router>
            <Header />
            <main className="welcomeAppCssLogic">
                <ScrollToTop />
                <Switch>
                    <Route path="/" exact component={MyFinances} />
                    <Route
                        path="/welcome"
                        exact
                        render={() => {
                            return <PreSettings updateState={updateState} state={state} updateStatusInitialBalance={updateStatusInitialBalance} />
                        }}
                    />
                    <Route
                        path="/welcome/intro"
                        exact
                        render={() => {
                            return <IntroMessage state={state} />
                        }}
                    />
                    <Route
                        path="/home"
                        exact
                        render={() => {
                            return <UserHomePage state={state} />
                        }} />
                    <Route
                        path="/home/balance"
                        exact
                        render={() => {
                            return (
                                // <StateContext.Provider value={state}>
                                //     <UserBalance />
                                // </StateContext.Provider>
                                <UserBalance
                                    state={state}
                                    updateAccountabilityLog={updateAccountabilityLog}
                                    updateState={updateState}
                                />
                            )
                        }} />
                    <Route
                        // This is to create dynamic routing. we using the ID.
                        path="/home/balance/:id"
                        exact
                        render={({ match }) => {
                            //I convert them numbers! to make sure it was the correct format.
                            let selectData = state.accountabilityLog[state.currentTable].find(element => Number(element.id) === Number(match.params.id))

                            return (
                                <UserBalanceSingleView
                                    singleData={selectData}
                                    arrayLength={state.accountabilityLog[state.currentTable].length}
                                    deleteLastEntry={deleteLastEntry}
                                />
                            )
                        }}
                    />
                    <Route
                        path="/home/incomes"
                        exact
                        render={() => {
                            return <UserIncomes
                                state={state}
                                updateAccountabilityLog={updateAccountabilityLog}
                                updateState={updateState} />
                        }} />
                    <Route
                        path="/home/expenses"
                        exact
                        render={() => {
                            return <UserExpenses
                                state={state}
                                updateAccountabilityLog={updateAccountabilityLog}
                                updateState={updateState}
                            />
                        }} />
                    <Route path="/account" exact component={Account} />
                    <Route path="/faqs" exact component={FAQs} />

                </Switch>
            </main>
            <Footer />
        </Router>
        
    )
}


export default App