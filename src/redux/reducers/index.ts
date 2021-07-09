import { combineReducers } from 'redux';
import { authReducer } from './auth'
import { taskReducer } from './task'
import { taskListReducer } from './taskList'
import { systemReducer } from './system'

export const rootReducer = combineReducers({
    auth: authReducer,
    task: taskReducer,
    taskList: taskListReducer,
    system: systemReducer
});