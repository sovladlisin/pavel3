import { GET_IMAGES, imagesDispatchTypes } from "../../actions/images/types"


interface IDefaultState {
    data: []
}

const defaultState: IDefaultState = {
    data: []
}

const imagesReducer = (state: IDefaultState = defaultState, action: imagesDispatchTypes) => {
    switch (action.type) {
        case GET_IMAGES:
            return {
                ...state,
                data: action.payload
            }

        default:
            return state
    }
}

export default imagesReducer
