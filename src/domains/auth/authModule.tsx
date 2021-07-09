import { SignIn } from "./parts/signIn"
import { SignUp } from "./parts/signUp"
import { Route, Switch } from 'react-router-dom';



export const AuthModule = () => {
    return (
        <Switch>
            <Route path='/auth/signIn'>
                <SignIn/>
            </Route>
            <Route path='/auth/signUp'>
                <SignUp/>
            </Route>
        </Switch>
    )
}