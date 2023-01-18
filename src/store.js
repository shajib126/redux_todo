import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './reducers/Counter'
import todoReducer from './reducers/TodoSlice'

export default configureStore({
    reducer:{
       todo:todoReducer
    }
})