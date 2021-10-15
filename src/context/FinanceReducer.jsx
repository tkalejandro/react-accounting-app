import React from 'react'

function FinanceReducer(state, action) {
    switch (action.type) {
        case "increaseInteraction":
            console.log("im working")
            let newValue = state.interactionCounter + 1
            return { ...state, interactionCounter: newValue }
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
                            //This will be only in index 0, because you need to initiate the balance to create a new table.
                            //New data wont have "table: main ".
                            tableTitle: "main",
                            //************ */
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
            return { ...state, accountabilityLog: newLog }
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
        case "tableForward":
            return { ...state, currentTable: state.currentTable + 1 }
        case "tableBackward":
            return { ...state, currentTable: state.currentTable - 1 }
        case "newTableTitle":
            return { ...state, newTable: { ...state.newTable, title: action.payLoad } }
        case "newTableBalance":
            return { ...state, newTable: { ...state.newTable, balance: action.payLoad } }
        case "addNewTable":
            //Lets clone the tables in accountability log
            let cloneTables = [...state.accountabilityLog]
            //This should be always an array with objects [{...}]
            let newTable = [{
                tableTitle: state.newTable.title,
                id: 0,
                type: "initial",
                category: "balance",
                description: "",
                quantity: "1",
                value: state.newTable.balance,
                expenses: "",
                incomes: state.newTable.balance,
            }]

            //Now lets add this newTable to the tables.
            cloneTables.push(newTable)
            //Now lets return the new version of tables and reset the table form.
            return {
                ...state,

                accountabilityLog: cloneTables,
                newTable: {
                    title: "",
                    balance: ""
                }
            }
        default:
            break
    }
}

export default FinanceReducer
