import { FC, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../../../redux/store";
import { FetchTask } from "../../../types/server/task";
import './task.scss'
import { editTaskReqAction, removeTaskReqAction } from "../../../redux/actions/task";
import { selectTaskListId } from "../../../redux/selectors/selectTaskList";

type TaskProps = {
    task: FetchTask,
}

export const Task: FC<TaskProps> = memo((props) => {
    const taskListId = useSelector(selectTaskListId())
    const dispatch = useDispatch()

    const task = props.task

    const [ active, setActive ] = useState(true)
    const [ caption, setCaption ] = useState(task.caption)
    const [ description, setDescription ] = useState(task.description)

    const selectMode = () => {
        setActive (!active)
        if (!active) {
            setCaption(task.caption)
            setDescription(task.description)
        }
    }

    if (!taskListId) return null

    const editTask = () => {
        const payload = {caption, description, isComplete: false}
        dispatch(editTaskReqAction(payload, task.id, taskListId))
        setActive(true)
    }

    const removeTask = () => {
        dispatch(removeTaskReqAction(task.id, taskListId))
    }


    return(            
        <div className='task'>
            <div className='task-block'>
                <input 
                    type="text"
                    placeholder='caption'
                    className='taskInput'
                    value={caption}
                    disabled={active}
                    onChange={(e) => setCaption(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder='description'
                    className='taskInput'
                    value={description}
                    disabled={active}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className='button-block'>
                <button
                    className='editTask'
                    onClick={selectMode}
                >
                    {active ? 'редактировать' : 'отменить'}
                </button>
                <button
                    className='saveTask'
                    disabled={active}
                    onClick={editTask}
                >
                    сохранить
                </button>
                {active && (
                    <button 
                        className='removeTask'
                        onClick={removeTask}
                    >
                        удалить
                    </button>
                )}
            </div>
        </div>
    )
})