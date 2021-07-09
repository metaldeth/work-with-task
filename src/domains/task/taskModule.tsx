import { Link, Route, Switch } from 'react-router-dom';
import { TaskAdd } from "./taskAdd";
import { TaskListAdd } from "./taskListAdd";
import { TaskListDirectory } from "./taskListDirectory";
import { TaskList } from "./taskList";
import './taskModule.scss'

export const TaskModule = () => {
    return(
        <div className='app'>
            <nav className='app_nav'>
                <Link className='nav-item' to='/'>Home</Link>
                <Link className='nav-item' to='/task/add'>Create Task</Link>
                <Link className='nav-item' to='/taskList/add'>Create Task List</Link>
            </nav>
            <div className='app_content'>
                <TaskListDirectory/>
                <Switch>
                    <Route path='/task/add'>
                        <TaskAdd/>
                    </Route>
                    <Route path='/taskList/add'>
                        <TaskListAdd/>
                    </Route>
                    <Route path='/taskList'>
                        <TaskList/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}