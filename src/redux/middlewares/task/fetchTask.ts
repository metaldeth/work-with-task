import { Dispatch } from 'redux';
import { StoreDataForMiddleware } from '../../../types/StoreDataForMiddleware';
import { Union as TaskActionUnion } from '../../actions/taskTypes';
import { fecthTaskResAction } from '../../actions/task';
import { requestError } from '../../actions/system';
import { FETCH_TASK_BY_LIST_REQ } from '../../constans/task';
import { fetchTask } from '../../../api/task';

export const fetchTaskMiddleware = (storeData: StoreDataForMiddleware) => (next: Dispatch) => (action: TaskActionUnion) => {
    if (action.type !== FETCH_TASK_BY_LIST_REQ) return next(action);
    fetchTask(action.taskListId)
        .then((payload) => {
            storeData.dispatch(fecthTaskResAction(payload, action.taskListId))
        })
        .catch((err) => {
            storeData.dispatch(requestError())
        })

    return next(action);
}