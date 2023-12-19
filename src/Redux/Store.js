import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { CompanyReducer } from './Reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const rootReducer = combineReducers({ company: CompanyReducer })
const comstore = configureStore({ reducer: rootReducer, middleware: [thunk] })
//const comstore = configureStore({ reducer: rootReducer, middleware: [thunk, logger] })

export default comstore;