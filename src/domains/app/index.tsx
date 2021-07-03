import React, { useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { AuthGourd } from "../../components/authRoute";
import { SignIn } from "../auth/signIn";
import { SignUp } from "../auth/signUp";
import { TaskAdd } from "../task/taskAdd";
import { TaskListAdd } from "../task/taskListAdd";
import { Task } from "../task/task";
import { TaskListDirectory } from "../task/taskListDirectory";
import { TaskList } from "../task/taskList";
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
  }, [])

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
