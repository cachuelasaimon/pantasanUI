import { GET, ADD, DELETE } from '../Actions/types'
import { v1 as uuid } from 'uuid'

const initialState = {
    list: [
        {id: uuid(), name: "Sample Item"},
        {id: uuid(), name: "Sample Item(2)"}
    ],   
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case GET: return {
            ...state
        }
        case ADD: return {
            ...state,
            list: [
                ...state.list,
                {id: uuid(), name:action.payload}
            ]
        }
        case DELETE: return {
            ...state,
            list: [
                ...state.list.filter(item => item.id !== action.payload)
            ]
        }
        default: return state
    }
}

export default reducer
