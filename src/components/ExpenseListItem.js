import React from "react";
import {connect} from "react-redux";

const ExpenseListItem = (props)=>(
    <div>
        <h3>{props.expense.description}</h3>
        <p>{props.expense.amount} - {props.expense.createdAt}</p>
    </div>
);


export default ExpenseListItem;