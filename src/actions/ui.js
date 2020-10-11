import { types } from "../types/types"


export const setError = ( errorString ) => {
    return {
        type: types.uiSetError,
        payload: errorString
    }
}

export const removeError = ( ) => {
    return {
        type: types.uiRemoveError
    }
}