import React from "react";
import {connect} from "react-redux";
import {removeExpense} from "../actions/expenses";

const ExpenseListItem = (props)=>(
    <div>
        <h3>{props.expense.description}</h3>
        <p>{props.expense.amount} - {props.expense.createdAt}</p>
        <button
            onClick={()=>{
                props.dispatch(removeExpense({id:props.expense.id}));
            }}
        >
            remove
        </button>
    </div>
);


export default connect()(ExpenseListItem);