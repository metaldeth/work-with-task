import { MiddlewareAPI, Dispatch, Middleware } from 'redux';
import { StoreDataForMiddleware } from '../../../types/StoreDataForMiddleware';
import { ApplicationState } from '../../store';
import { Union as TaskActionUnion } from '../../actions/taskTypes';
import { createTaskResAction } from '../../actions/task';
import { requestError } from '../../actions/system';
import { CREATE_TASK_REQ } from '../../constans/task';
import { createTask } from '../../../api/task';

export const createTaskMiddleware = (storeData: StoreDataForMiddleware) => (next: Dispatch) => (action: TaskActionUnion) => {
    if (action.type !== CREATE_TASK_REQ) return next(action);
    createTask(action.taskListId, action.payload)
        .then((payload) => {
            storeData.dispatch(createTaskResAction(payload, action.taskListId))
        })
        .catch((err) => {
            storeData.dispatch(requestError())
        })

    return next(action);
}