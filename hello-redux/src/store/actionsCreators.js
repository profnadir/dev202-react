import * as types from "./actionsTypes"



export const inc = () => {
    return {type:types.INC}
}

export const dec = () => {
    return {type: types.DEC}
}

export const reset = () => {
    return {type:types.RESET}
}

export const incBy = (step) => {
    return {type:types.INCBY,payload : step}
}

export const decBy = (step) => {
    return {type:types.DECBY,payload : step}
}

export const addArticle = (article) => {
    return {
        type: types.ADD_ARTICLE,
        payload : article
    }
}

//...