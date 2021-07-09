import { Dispatch } from 'redux';
import { StoreDataForMiddleware } from '../../../types/StoreDataForMiddleware';
import { Union as TaskListUnion } from '../../actions/taskListTypes';
import { removeTaskListResAction } from '../../actions/taskList';
import { requestError } from '../../actions/system';
import { REMOVE_TASK_LIST_REQ } from '../../constans/taskList';
import { removeTaskList } from '../../../api/taskList';

export const removeTaskListMiddleware = (storeData: StoreDataForMiddleware) => (next: Dispatch) => (action: TaskListUnion) => {
    if (action.type !== REMOVE_TASK_LIST_REQ) return next(action);
    removeTaskList(action.id)
        .then(() => {
            storeData.dispatch(removeTaskListResAction(action.id))
        })
        .catch((err) => {
            storeData.dispatch(requestError())
        })

    return next(action);
}