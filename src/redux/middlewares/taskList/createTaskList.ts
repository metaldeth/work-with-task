import { MiddlewareAPI, Dispatch, Middleware } from 'redux';
import { StoreDataForMiddleware } from '../../../types/StoreDataForMiddleware';
import { ApplicationState } from '../../store';
import { Union as TaskListUnion } from '../../actions/taskListTypes';
import { createTaskListResAction } from '../../actions/taskList';
import { requestError } from '../../actions/system';
import { CREATE_TASK_LIST_REQ } from '../../constans/taskList';
import { createTaskList } from '../../../api/taskList';

export const createTaskListMiddleware = (storeData: StoreDataForMiddleware) => (next: Dispatch) => (action: TaskListUnion) => {
    if (action.type !== CREATE_TASK_LIST_REQ) return next(action);
    createTaskList()
        .then((payload) => {
            storeData.dispatch(createTaskListResAction(payload))
        })
        .catch((err) => {
            storeData.dispatch(requestError())
        })

    return next(action);
}