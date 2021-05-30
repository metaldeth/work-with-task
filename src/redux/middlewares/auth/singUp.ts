import { MiddlewareAPI, Dispatch, Middleware } from 'redux';
import { StoreDataForMiddleware } from '../../../types/StoreDataForMiddleware';
import { ApplicationState } from '../../store';
import { Union as AuthActionUnion } from '../../actions/authTypes';
import { singUpRes } from '../../actions/auth';
import { requestError } from '../../actions/system';
import { SING_UP_REQ } from '../../constans/auth';
import { singUpUser } from '../../../api/auth';

export const singUpMidleware = (storeData: StoreDataForMiddleware) => (next: Dispatch) => (action: AuthActionUnion) => {
    if (action.type !== SING_UP_REQ) return next(action);
    singUpUser(action.payload)
        .then(() => {
            storeData.dispatch(singUpRes())
        })
        .catch((err) => {
            storeData.dispatch(requestError())
        })

    return next(action);
}