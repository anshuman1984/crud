import { MAKE_REQ, REQ_GETALL_SUCC, REQ_GETALL_FAIL, OPEN_POPUP, REQ_ADD_SUCC } from './ActionType'
export const makeRequest = () => {
    return {
        type: MAKE_REQ
    }
}

export const getAllRequestSuccess = (data) => {
    return {
        type: REQ_GETALL_SUCC,
        payload: data
    }
}

export const getAllRequestFail = (data) => {
    return {
        type: REQ_GETALL_FAIL,
        payload: data
    }
}

export const OpenPopup = () => {
    return {
        type: OPEN_POPUP,
    }
}

export const AddRequest = (data) => {
    return {
        type: REQ_ADD_SUCC,
        payload: data
    }
}