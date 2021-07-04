import { ApplicationState, store } from "../../../redux/store";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTaskListReqAction, selectTaskListAction } from "../../../redux/actions/taskList";
import { fetchTaskReqAction } from "../../../redux/actions/task";
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import { FetchTaskList } from "../../../types/server/taskList";
import './taskListDirectory.scss'
import { TaskListDirectoryItem } from "./taskListDirectoryItem";
import { TaskListAdd } from "./taskListAdd";

export const TaskListDirectory = () => {    
    const taskList = useSelector((store: ApplicationState) => store.taskList)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTaskListReqAction())
    },[])

    return(
        <div className='taskListDirectory'>
            {taskList.list.map((item) => {
                    return(
                        <TaskListDirectoryItem
                            key={item.id}
                            caption={item.caption}
                            id={item.id}
                        />
                    )
                }
            )}
            <TaskListAdd/>
        </div>
    )
}