import { MiddlewareAPI, Dispatch, Middleware } from 'redux';
import { StoreDataForMiddleware } from '../../../types/StoreDataForMiddleware';
import { ApplicationState } from '../../store';
import { Union as AuthActionUnion } from '../../actions/authTypes';
import { fetchMainUserDataRes } from '../../actions/auth';
import { requestError } from '../../actions/system';
import { FETCH_MAIN_USER_DATA_REQ } from '../../constans/auth';
import { fetchMainUserData } from '../../../api/auth';

export const fetchMainUserDataMiddleware = (storeData: StoreDataForMiddleware) => (next: Dispatch) => (action: AuthActionUnion) => {
    if (action.type !== FETCH_MAIN_USER_DATA_REQ) return next(action);
    fetchMainUserData()
        .then((res) => {
            storeData.dispatch(fetchMainUserDataRes(res))
        })
        .catch((err) => {
            storeData.dispatch(requestError())
        })

    return next(action);
}