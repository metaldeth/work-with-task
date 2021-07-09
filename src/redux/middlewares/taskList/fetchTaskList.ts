import { Dispatch } from 'redux';
import { StoreDataForMiddleware } from '../../../types/StoreDataForMiddleware';
import { Union as TaskListUnion } from '../../actions/taskListTypes';
import { fetchTaskListResAction } from '../../actions/taskList';
import { requestError } from '../../actions/system';
import { FETCH_TASK_LIST_REQ } from '../../constans/taskList';
import { fetchTaskList } from '../../../api/taskList';

export const fetchTaskListMiddleware = (storeData: StoreDataForMiddleware) => (next: Dispatch) => (action: TaskListUnion) => {
    if (action.type !== FETCH_TASK_LIST_REQ) return next(action);
    fetchTaskList()
        .then((payload) => {
            storeData.dispatch(fetchTaskListResAction(payload))
        })
        .catch((err) => {
            storeData.dispatch(requestError())
        })

    return next(action);
}