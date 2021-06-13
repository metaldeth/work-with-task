import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { AuthGourd } from "../../components/authRoute";
import { SignIn } from "../auth/signIn";
import { SignUp } from "../auth/signUp";


function App() {
  return (
    <>
      <Switch>
        <Route path='/auth/signIn'>
          <AuthGourd mushAuth = {false}>
            <SignIn/>
          </AuthGourd>
        </Route>
        <Route path='/auth/signUp'>
          <AuthGourd mushAuth = {false}>
            <SignUp/>
          </AuthGourd>
        </Route>
        <Route path="/">
          <AuthGourd>
            hello
          </AuthGourd>
        </Route>
      </Switch>
    </>
  );
}

export default App;
