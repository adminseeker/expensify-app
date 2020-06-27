import React from "react";
import {connect} from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

const ExpenseList = (props)=>(
    <div>
        <p>Expense List</p>
        <p>{props.expenses.length}</p>
        {props.expenses.map((expense)=>(
            <ExpenseListItem key={expense.id} expense={expense}/>
        ))}
    </div>
);

const mapStatetoProps = (state)=>(
    {
        expenses:selectExpenses(state.expenses,state.filters)
    }
);

export default connect(mapStatetoProps)(ExpenseList);