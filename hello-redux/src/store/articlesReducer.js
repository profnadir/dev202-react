import * as types from "./actionsTypes"

const initialState = {
    articles: []
}

export const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_ARTICLE:
            return {...state, article : [...state.articles, action.payload]}
        //...
        default:
            return state
    }
}