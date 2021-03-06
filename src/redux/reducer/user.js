import { GET_USER, EDIT_USER_REQUEST, EDIT_USER_SUCCESS, EDIT_USER_FAILED, CHECK_PIN, PIN_CHECKED, USER_LOGOUT } from '../type/user'

const initialState = {
    data: [],
    loading: false,
    isEditSuccess: false,
    isEditFailed: false,
    messageEdit: '',
    pinCheck: '',
    checkedPin: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                data: action.payload.data[0]
            }
        case EDIT_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case EDIT_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                messageEdit: action.payload.message,
                data: action.payload.data,
                isEditSuccess: true,
                isEditFailed: false
            }
        case EDIT_USER_FAILED:
            return {
                ...state,
                loading: false,
                messageEdit: action.payload,
                isEditSuccess: false,
                isEditFailed: true
            }
        case CHECK_PIN:
            return {
                ...state,
                pinCheck: action.payload
            }
        case PIN_CHECKED:
            return {
                ...state,
                checkedPin: true
            }
        case USER_LOGOUT:
            return {
                ...state,
                data: []
            }
        default:
            return {
                ...state,
                pinCheck: '',
                checkedPin: false
            }
    }
}