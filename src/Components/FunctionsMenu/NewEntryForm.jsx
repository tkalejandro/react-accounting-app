import React, {createRef} from "react";
import "./NewEntryForm.css"

 

const NewEntryForm = (props) => {



    let data = props.data
    console.log("new entry form jsx", data)
    let rule = props.rule
    let select = createRef()

    const setCategories = () => {
        let selectArray = data.accountabilityLog[data.currentTable]
        //This will give us the categories in 1 array
        
        const noRepeated = (array) => {
            console.log("array",array)
            let newArray = []
            
            //Let loop the categories and creat new one with no repeated values
            for (let i = 0; i < array.length; i++) {
                if(newArray.includes(array[i].category) === false) {
                    newArray.push(array[i].category)
                } 
            }
            
            return newArray
        }
        let filteredCategories = noRepeated(selectArray)
        //Lets remove the first item which is "balance" category
        filteredCategories.shift()
        console.log("filteredCategories", filteredCategories)
        
        return (
            <>
            {filteredCategories.map((element, index) => <option key={index}>{element}</option>)}
            </>
        )
    }
    

    const setOptions = () => {
        if (rule === "all") {
            
            return (
                
                <>
                    <option value="">Type of Entry</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </>
            )
        } else if (rule === "income") {
            
            return <option value="income">Income</option>
        } else {
            
            return <option value="expense">Expense</option>
        }
    }

    const submitInfo = (event) => {
        event.preventDefault()
        let newEntry = props.data.newEntry
        let value = event.target.newEntryType.value
        newEntry.type = value
        console.log(newEntry)    

        if (newEntry.type !== "" &&
            newEntry.category.length >= 4 &&
            newEntry.description.length >= 4 &&
            newEntry.quantity >= 0 &&
            newEntry.value >= 0) {
                props.updateAccountabilityLog()
            }
        else {
            alert("Please complete the form in the correct way")
        }
        

    }


    return (
        <>
            <section className="newEntryFormContainer" ref={props.modal}>
                <h2 className="title">New Entry</h2>
                <div className="sequenceContainer">
                    <span className="sequence">{data.accountabilityLog[data.currentTable].length}</span>
                    <span className="sequenceUserName">{data.userInitialInfo.name} {data.userInitialInfo.lastName}</span>
                </div>

                <form className="newEntryForm" onSubmit={submitInfo}>
                    {/* INCOME / EXPENSE */}
                    <select 
                    id="newEntryType" 
                    name="newEntryType" 
                    onChange={props.updateState} 
                    defaultValue={data.newEntry.type} 
                    ref={select}>
                        {setOptions()}
                    </select>

                    {/* CATEGORY */}
                    <input 
                    placeholder="Category" 
                    name="newEntryCategory" 
                    onChange={props.updateState} 
                    value={data.newEntry.category} 
                    list="categoryList" />
                    <datalist id="categoryList">
                        {setCategories()}
                    </datalist>

                    {/* DESCRIPTION */}
                    <input 
                    placeholder="Description" 
                    name="newEntryDescription" 
                    onChange={props.updateState} 
                    value={data.newEntry.description} />

                    <div className="newEntryQuantityValueContainer">

                        {/* QUANTITY */}
                        <input 
                        placeholder="Quantity" 
                        type="number" 
                        name="newEntryQuantity" 
                        onChange={props.updateState} 
                        value={data.newEntry.quantity} />

                        {/* VALUE */}
                        <input 
                        placeholder="Value" 
                        type="number" 
                        name="newEntryValue" 
                        onChange={props.updateState} 
                        value={data.newEntry.value} />
                        
                        {/* Multiplication of 2 values */}
                        <span className="newEntryTotal"> {Number(data.newEntry.quantity) * Number(data.newEntry.value)} €</span>
                    </div>

                    <button type="submit" className="newEntryBtn"> Add new Entry</button>
                </form>

            </section>
            <div className="blackBox" ref={props.background}></div>
        </>
    )
}

export default NewEntryForm