import { Dispatch } from 'redux';
import { StoreDataForMiddleware } from '../../../types/StoreDataForMiddleware';
import { Union as TaskListUnion } from '../../actions/taskListTypes';
import { editTaskListResAction } from '../../actions/taskList';
import { requestError } from '../../actions/system';
import { EDIT_TASK_LIST_REQ } from '../../constans/taskList';
import { editTaskList } from '../../../api/taskList';

export const editTaskListMiddleware = (storeData: StoreDataForMiddleware) => (next: Dispatch) => (action: TaskListUnion) => {
    if (action.type !== EDIT_TASK_LIST_REQ) return next(action);
    editTaskList(action.id, action.payload)
        .then((payload) => {
            storeData.dispatch(editTaskListResAction(payload))
        })
        .catch((err) => {
            storeData.dispatch(requestError())
        })

    return next(action);
}