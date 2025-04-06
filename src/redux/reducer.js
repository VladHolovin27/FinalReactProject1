import { combineReducers } from "redux";

const initialState = {
    transactions: []
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TRANSACTION":
            return {...state, transactions: [...state.transactions, action.payload]}
        case "DELETE_TRANSACTION": 
            return {...state, transactions: state.transactions.filter((_, index) => index !== action.payload)}
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    transactions: taskReducer
})