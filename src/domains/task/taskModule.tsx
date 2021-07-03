import { Link, Route, Switch } from 'react-router-dom';
import { TaskAdd } from "./taskAdd";
import { TaskListAdd } from "./taskListAdd";
import { TaskListDirectory } from "./taskListDirectory";
import { TaskList } from "./taskList";
import './taskModule.scss'

export const TaskModule = () => {
    return(
        <>
        <nav className='nav'>
            <Link className='nav_item' to='/'>Home</Link>
            <Link className='nav_item' to='/task/add'>Create Task</Link>
            <Link className='nav_item' to='/taskList/add'>Create Task List</Link>
        </nav>
        <div className='content_box'>
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
    </>
    )
}