import { MiddlewareAPI, Dispatch, Middleware } from 'redux';
import { StoreDataForMiddleware } from '../../../types/StoreDataForMiddleware';
import { ApplicationState } from '../../store';
import { Union as AuthActionUnion } from '../../actions/authTypes';
import { singInRes } from '../../actions/auth';
import { requestError } from '../../actions/system';
import { SING_IN_REQ } from '../../constans/auth';
import { singInUser } from '../../../api/auth';

export const singInMidleware = (storeData: StoreDataForMiddleware) => (next: Dispatch) => (action: AuthActionUnion) => {
    if (action.type !== SING_IN_REQ) return next(action);
    singInUser(action.payload)
        .then(() => {
            storeData.dispatch(singInRes())
        })
        .catch((err) => {
            storeData.dispatch(requestError())
        })

    return next(action);
}