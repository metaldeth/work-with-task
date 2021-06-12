import { MiddlewareAPI, Dispatch, Middleware } from 'redux';
import { StoreDataForMiddleware } from '../../../types/StoreDataForMiddleware';
import { ApplicationState } from '../../store';
import { Union as TaskListUnion } from '../../actions/taskListTypes';
import { taskListResAction } from '../../actions/taskList';
import { requestError } from '../../actions/system';
import { TASK_LIST_REQ } from '../../constans/taskList';
import { fetchTaskList } from '../../../api/taskList';

export const fetchTaskListMiddleware = (storeData: StoreDataForMiddleware) => (next: Dispatch) => (action: TaskListUnion) => {
    if (action.type !== TASK_LIST_REQ) return next(action);
    fetchTaskList()
        .then((payload) => {
            storeData.dispatch(taskListResAction(payload))
        })
        .catch((err) => {
            storeData.dispatch(requestError())
        })

    return next(action);
}