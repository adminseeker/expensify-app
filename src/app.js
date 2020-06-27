import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {addExpense} from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses"; 
import {Provider} from "react-redux";
import "normalize.css/normalize.css"
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(addExpense({description:"water bill",amount:100}));
store.dispatch(addExpense({description:"gas bill",amount:200}));
store.dispatch(setTextFilter("water"));



const state = store.getState();
console.log(getVisibleExpenses(state.expenses,state.filters));

const jsx = (
    <Provider store={store}>
        <AppRouter />    
    </Provider>
)

ReactDOM.render(jsx ,document.getElementById("app"));