import { MiddlewareAPI, Dispatch, Middleware } from 'redux';
import { StoreDataForMiddleware } from '../../../types/StoreDataForMiddleware';
import { ApplicationState } from '../../store';
import { Union as TaskListUnion } from '../../actions/taskListTypes';
import { fetchTaskListReqAction, removeTaskListResAction } from '../../actions/taskList';
import { requestError } from '../../actions/system';
import { REMOVE_TASK_LIST_REQ } from '../../constans/taskList';
import { removeTaskList } from '../../../api/taskList';

export const removeTaskListMiddleware = (storeData: StoreDataForMiddleware) => (next: Dispatch) => (action: TaskListUnion) => {
    if (action.type !== REMOVE_TASK_LIST_REQ) return next(action);
    removeTaskList(action.id)
        .then(() => {
            storeData.dispatch(removeTaskListResAction(action.id))
        })
        .then(() => {
            storeData.dispatch(fetchTaskListReqAction())
        })
        .catch((err) => {
            storeData.dispatch(requestError())
        })

    return next(action);
}