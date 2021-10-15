import React ,{useReducer} from 'react';
import FinanceContext from './FinanceContext';
import FinanceReducer from './FinanceReducer';
import exampleData from '../Assets/exampleData';
import exampleData2 from '../Assets/exampleData';

// rfce functional component
// rcc class component
function FinanceState({children}) {
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
        accountabilityLog: [exampleData, exampleData2],
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
        newTable: {
            title: "",
            balance: ""
        },
    
        //Booleans
        premiumAccount: false,
        initialBalanceConfigured: false,
        //Collecting Data
        interactionCounter: 0
    }
    const [state , dispatch] = useReducer(FinanceReducer , initialState);
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
            case "newTableTitle":
                dispatch({ type: "newTableTitle", payLoad: event.target.value })
                break
            case "newTableBalance":
                dispatch({ type: "newTableBalance", payLoad: event.target.value })
                break
            default:
                break
        }
    }
    //const editItem = () => dispatch({ type: "editItem" })
    const deleteLastEntry = () => dispatch({ type: "deleteLastEntry" })
    const updateAccountabilityLog = () => dispatch({ type: "updateAccountabilityLog" })
    const updateStatusInitialBalance = () => dispatch({ type: "statusInitialBalance" })
    //const updateStatusIncome = () => dispatch({ type: "statusIncomeAdded" })
    //const updateStatusExpense = () => dispatch({ type: "statusExpenseAdded" })
    const tableForward = () => dispatch({ type: "tableForward" })
    const tableBackward = () => dispatch({ type: "tableBackward" })
    const addNewTable = () => dispatch({ type: "addNewTable" })
    return (
        <FinanceContext.Provider value={{state , updateState ,deleteLastEntry ,updateAccountabilityLog, updateStatusInitialBalance,tableForward ,tableBackward ,addNewTable}}>
            {children}
        </FinanceContext.Provider>
    )
}

export default FinanceState;
