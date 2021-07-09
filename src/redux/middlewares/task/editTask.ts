import { Dispatch } from 'redux';
import { StoreDataForMiddleware } from '../../../types/StoreDataForMiddleware';
import { Union as TaskActionUnion } from '../../actions/taskTypes';
import { editTaskResAction } from '../../actions/task';
import { requestError } from '../../actions/system';
import { EDIT_TASK_REQ } from '../../constans/task';
import { editTask } from '../../../api/task';

export const editTaskMiddleware = (storeData: StoreDataForMiddleware) => (next: Dispatch) => (action: TaskActionUnion) => {
    if (action.type !== EDIT_TASK_REQ) return next(action);
    editTask(action.taskListId, action.taskId, action.payload)
        .then((payload) => {
            storeData.dispatch(editTaskResAction(payload, action.taskListId))
        })
        .catch((err) => {
            storeData.dispatch(requestError())
        })

    return next(action);
}