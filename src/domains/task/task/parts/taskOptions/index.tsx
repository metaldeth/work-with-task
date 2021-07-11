import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editTaskReqAction, removeTaskReqAction } from '../../../../../redux/actions/task'
import { selectTaskListId } from '../../../../../redux/selectors/selectTaskList'
import { selectTask, selectTaskId } from '../../../../../redux/selectors/selectTasks'
import { TaskInput } from './parts/taskInput'
import './taskOptions.scss'

export const TaskOptions = () => {

    const taskId = useSelector(selectTaskId)
    const task = useSelector(selectTask(taskId))
    const taskListId = useSelector(selectTaskListId)

    if (!taskId || !task || !taskListId) return null

    return(
        <div className='taskOptions'>
            <TaskInput
                caption={task.caption}
                description={task.description}
                taskId={task.id}
                taskListId={taskListId}
            />
        </div>
    )
}