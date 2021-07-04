import { MiddlewareAPI, Dispatch, Middleware } from 'redux';
import { StoreDataForMiddleware } from '../../../types/StoreDataForMiddleware';
import { ApplicationState } from '../../store';
import { Union as TaskListUnion } from '../../actions/taskListTypes';
import { editTaskListResAction, fetchTaskListReqAction } from '../../actions/taskList';
import { requestError } from '../../actions/system';
import { EDIT_TASK_LIST_REQ } from '../../constans/taskList';
import { editTaskList } from '../../../api/taskList';

export const editTaskListMiddleware = (storeData: StoreDataForMiddleware) => (next: Dispatch) => (action: TaskListUnion) => {
    if (action.type !== EDIT_TASK_LIST_REQ) return next(action);
    editTaskList(action.id, action.payload)
        .then((payload) => {
            storeData.dispatch(editTaskListResAction(payload))
        })
        .then(() => {
            storeData.dispatch(fetchTaskListReqAction())
        })
        .catch((err) => {
            storeData.dispatch(requestError())
        })

    return next(action);
}