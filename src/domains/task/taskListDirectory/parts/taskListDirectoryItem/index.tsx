import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { selectTaskListAction, editTaskListReqAction, removeTaskListReqAction } from "../../../../../redux/actions/taskList";
import { fetchTaskReqAction } from "../../../../../redux/actions/task";
import { FC } from "react"
import { useState, useEffect } from "react";
import './taskListDirectoryItem.scss'

type TaskListProps = {
    caption: string,
    id: number
}

export const TaskListDirectoryItem: FC<TaskListProps> = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [caption, setCaption] = useState(props.caption)
    const [isEditable, setIsEditable] = useState(true)

    useEffect(() => {
        if (isEditable) setCaption(props.caption)
    },[props.caption, isEditable])

    const selectTaskList = (id: number) => {
        dispatch(selectTaskListAction(id))
        dispatch(fetchTaskReqAction(id))
        history.push(`/taskList`)
    }

    const editTaskList = () => {
        const payload = {caption: caption}
        dispatch(editTaskListReqAction(payload, props.id))
        selectMode()
    } 

    const removeTaskList = () => {
        dispatch(removeTaskListReqAction(props.id))
    }

    const selectMode = () => {
        setIsEditable(!isEditable)
        setCaption(props.caption)
    }

    return(
        <div className='taskListDirectury__item'>
            <div className='taskList'  onClick={() => selectTaskList(props.id)}>
                <input 
                    value={caption} 
                    type='text' 
                    className='taskList__input' 
                    disabled={isEditable}
                    onChange={(e) => setCaption(e.target.value)}
                />
            </div>
            <button
                disabled={isEditable}
                className='taskList__button'
                onClick={editTaskList}
            >save</button>
            <button
                className='taskList__button'
                onClick={selectMode}
            >{isEditable ? 'edit' : 'cancel'}</button>
            <button
                className='taskList__button'
                onClick={removeTaskList}
            >del</button>
        </div>
    )
}