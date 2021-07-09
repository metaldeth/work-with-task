import { Dispatch } from 'redux';
import { StoreDataForMiddleware } from '../../../types/StoreDataForMiddleware';
import { Union as AuthActionUnion } from '../../actions/authTypes';
import { fetchMainUserDataRes } from '../../actions/auth';
import { requestError } from '../../actions/system';
import { FETCH_MAIN_USER_DATA_REQ, SING_IN_RES } from '../../constans/auth';
import { fetchMainUserData } from '../../../api/auth';

export const fetchMainUserDataMiddleware = (storeData: StoreDataForMiddleware) => (next: Dispatch) => (action: AuthActionUnion) => {
    if (![FETCH_MAIN_USER_DATA_REQ, SING_IN_RES].includes(action.type)) return next(action);
    fetchMainUserData()
        .then((res) => {
            storeData.dispatch(fetchMainUserDataRes(res))
        })
        .catch((err) => {
            storeData.dispatch(requestError())
        })

    return next(action);
}