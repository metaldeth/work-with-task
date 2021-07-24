import { Dispatch } from 'redux';
import { StoreDataForMiddleware } from '../../../types/StoreDataForMiddleware';
import { Union as AuthActionUnion } from '../../actions/authTypes';
import { singInRes } from '../../actions/auth';
import { requestError } from '../../actions/system';
import { LOG_OUT, SING_IN_REQ } from '../../constans/auth';
import { singInUser } from '../../../api/auth';

export const logOutMidleware = (storeData: StoreDataForMiddleware) => (next: Dispatch) => (action: AuthActionUnion) => {
    if (action.type !== LOG_OUT) return next(action);
    localStorage.clear()
    return next(action);
}