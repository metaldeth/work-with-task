import { Link, Route, Switch } from 'react-router-dom';
import { TaskAdd } from "./taskAdd";
import { TaskListAdd } from "./taskListAdd";
import { TaskListDirectory } from "./taskListDirectory";
import { TaskList } from "./taskList";
import './taskModule.scss'
import { BsFillHouseFill } from "react-icons/bs";
import { RiFileAddFill, RiFolderAddFill } from "react-icons/ri";
import { IoExit } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { logOutAction } from '../../redux/actions/auth';
import { GiDolphin } from "react-icons/gi";
import { ApplicationState } from '../../redux/store';

export const TaskModule = () => {
    const userName = useSelector((state:ApplicationState) => state.auth.user?.username)
    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(logOutAction())
    }
    return(
        <div className='app'>
            <nav className='app_nav'>
                <GiDolphin/>
                <Link className='nav-item' to='/'><BsFillHouseFill/></Link>
                <Link className='nav-item' to='/task/add'><RiFileAddFill/></Link>
                <Link className='nav-item' to='/taskList/add'><RiFolderAddFill/></Link>
                {userName}
                <IoExit className='nav-item exit' onClick={logOut}/>
            </nav>
            <div className='app_content'>
                <div className='taskListDirectory'>
                    <TaskListDirectory/>
                </div>
                <div className='content'>
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
        </div>
    )
}