import { GET, ADD, DELETE } from './types'

export const Add = (newItem) => dispatch => {
    dispatch({
        type: ADD,
        payload: newItem
    })
}

export const Get = () => dispatch => {
    dispatch({
        type: GET
    })
}

export const Delete = (itemID) => dispatch => {
    dispatch({
        type: DELETE,
        payload: itemID
    })
}