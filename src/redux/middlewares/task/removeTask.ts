import { MiddlewareAPI, Dispatch, Middleware } from 'redux';
import { StoreDataForMiddleware } from '../../../types/StoreDataForMiddleware';
import { ApplicationState } from '../../store';
import { Union as TaskActionUnion } from '../../actions/taskTypes';
import { removeTaskResAction } from '../../actions/task';
import { requestError } from '../../actions/system';
import { REMOVE_TASK_REQ } from '../../constans/task';
import { removeTask } from '../../../api/task';

export const removeTaskMiddleware = (storeData: StoreDataForMiddleware) => (next: Dispatch) => (action: TaskActionUnion) => {
    if (action.type !== REMOVE_TASK_REQ) return next(action);
    removeTask(action.taskListId, action.taskId)
        .then((payload) => {
            storeData.dispatch(removeTaskResAction(action.taskListId, action.taskId))
        })
        .catch((err) => {
            storeData.dispatch(requestError())
        })

    return next(action);
}