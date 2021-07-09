import { FC, useState, memo } from "react";
import { useDispatch } from "react-redux";
import { FetchTask } from "../../../types/server/task";
import './task.scss'
import { editTaskReqAction, removeTaskReqAction } from "../../../redux/actions/task";

type TaskProps = {
    task: FetchTask,
    taskListid: number
}

export const Task: FC<TaskProps> = memo((props) => {
    const dispatch = useDispatch()

    const task = props.task
    const taskListId = props.taskListid    

    const [ isEditable, setIsEditable ] = useState(true)
    const [ caption, setCaption ] = useState(task.caption)
    const [ description, setDescription ] = useState(task.description)

    const selectMode = () => {
        setIsEditable (!isEditable)
        if (!isEditable) {
            setCaption(task.caption)
            setDescription(task.description)
        }
    }

    if (!taskListId) return null

    const editTask = () => {
        const payload = {caption, description, isComplete: false}
        dispatch(editTaskReqAction(payload, task.id, taskListId))
        setIsEditable(true)
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
                    disabled={isEditable}
                    onChange={(e) => setCaption(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder='description'
                    className='taskInput'
                    value={description}
                    disabled={isEditable}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className='button-block'>
                <button
                    className='editTask'
                    onClick={selectMode}
                >
                    {isEditable ? 'редактировать' : 'отменить'}
                </button>
                <button
                    className='saveTask'
                    disabled={isEditable}
                    onClick={editTask}
                >
                    сохранить
                </button>
                {isEditable && (
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