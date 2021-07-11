import { FC, useState, memo } from "react";
import { useDispatch } from "react-redux";
import { FetchTask } from "../../../types/server/task";
import './task.scss'
import { editTaskReqAction, removeTaskReqAction, selectTaskAction } from "../../../redux/actions/task";
import { useCallback } from "react";

type TaskProps = {
    task: FetchTask,
    taskListid: number
}

export const Task: FC<TaskProps> = memo((props) => {
    const dispatch = useDispatch()

    const task = props.task
    const taskListId = props.taskListid    


    const selectTask = () => {
        dispatch(selectTaskAction(task.id))        
    }
    
    if (!taskListId) return null

    return(            
        <div className='task' onClick={selectTask}>
            <div className='task-block'>
                {task.caption}
            </div>
        </div>
    )
})