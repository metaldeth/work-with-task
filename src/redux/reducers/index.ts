import { combineReducers } from 'redux';
import {AuthState, authReducer} from './auth'
import {TaskState, taskReducer} from './task'
import {TaskListState, taskListReducer} from './taskList'
import {SystemState, systemReducer} from './system'

export const rootReducer = combineReducers({
    auth: authReducer,
    task: taskReducer,
    taskList: taskListReducer,
    system: systemReducer
});