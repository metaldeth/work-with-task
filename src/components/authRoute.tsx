import React, { useEffect, FC } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {ApplicationState} from '../redux/store'

export interface AuthGourdProps {
  mushAuth?: boolean;
}

export const AuthGourd: FC<AuthGourdProps> = ({ mushAuth = true, children }) => {
    const isAuth = useSelector<ApplicationState>((state) => state.auth.isAuth);
    const history = useHistory();

    useEffect(() => {
      if (isAuth === mushAuth) return;
      const path = mushAuth ? '/auth/signIn' : '/'; 
      history.replace(path);
    }, [isAuth, mushAuth, history]);

    if (isAuth !== mushAuth) return null;
    return <>{children}</>;  
}