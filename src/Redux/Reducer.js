export const initialState = {
    isloading: false,
    companyList: [],
    companyObj: {},
    errorMessage: ''
}

export const CompanyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MAKE_REQ':
            return {
                ...state,
                isloading: true
            }
        case 'REQ_GETALL_SUCC':
            return {
                ...state,
                isloading: false,
                companyList: action.payload
            }
        case 'REQ_GETALL_FAIL':
            return {
                ...state,
                isloading: false,
                companyList: [],
                errorMessage: action.payload
            }
        case 'REQ_ADD_SUCC':
            const _inputData = { ...action.payload }
            const maxId = Math.max(...state.companyList.map(o => o.id))
            _inputData.id = maxId + 1
            return {
                ...state,
                companyList: [...state.companyList, _inputData],
            }
        default: return state
    }
}