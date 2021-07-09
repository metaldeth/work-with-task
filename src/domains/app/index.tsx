import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthGourd } from "../../components/authRoute";
import { useDispatch, useSelector } from "react-redux"
import { fetchMainUserDataReq } from "../../redux/actions/auth";
import { ApplicationState } from '../../redux/store';
import { AuthModule } from "../auth/authModule";
import { TaskModule } from '../task/taskModule';


function App() {
  const dispatch = useDispatch();

  const isInitReqExicute = useSelector((state: ApplicationState) => state.auth.isInitReqExicute)

  useEffect(() => {
    dispatch(fetchMainUserDataReq());
  }, [dispatch])

  if (!isInitReqExicute) return null; 

  return (
    <>
      <Switch>
        <Route path='/auth'>
          <AuthGourd mushAuth = {false}>
            <AuthModule/>
          </AuthGourd>
        </Route>
        <Route path="/">
          <AuthGourd>
            <TaskModule/>
          </AuthGourd>
        </Route>
      </Switch>
    </>
  );
}

export default App;
