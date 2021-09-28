import React from "react";
import DataSingleItem from "../Components/AccountabilityComponents/Balance/Main/DataSingleItem";

const UserBalanceSingleView = (props) => {

    return(
        <DataSingleItem 
        singleData={props.singleData} 
        arrayLength={props.arrayLength}
        deleteLastEntry={props.deleteLastEntry}
        />
    )
}

export default UserBalanceSingleView