import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { selectTaskListAction, editTaskListReqAction, removeTaskListReqAction } from "../../../../../redux/actions/taskList";
import { fetchTaskReqAction, selectTaskAction } from "../../../../../redux/actions/task";
import { FC } from "react"
import { useState, useEffect } from "react";
import './taskListDirectoryItem.scss'
import { useCallback } from "react";
import { VoidFunctionComponent } from "react";
import { GrCheckmark, GrClear, GrEdit, GrTrash } from "react-icons/gr";
import { RiDeleteBin5Fill, RiEditFill, RiSaveFill } from "react-icons/ri"
import { TiCancel } from "react-icons/ti"
import { editTask } from "../../../../../api/task";

type EditTaskList = (caption: string, id: number) => void

type TaskListProps = {
    caption: string,
    id: number,
    editTaskList: EditTaskList
}

export const TaskListDirectoryItem: FC<TaskListProps> = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [caption, setCaption] = useState(props.caption)
    const [isEditable, setIsEditable] = useState(true)

    useEffect(() => {
        if (isEditable) setCaption(props.caption)
    },[props.caption, isEditable])

    // const editTaskList = useCallback(props.editTaskList, [])

    const selectTaskList = (id: number) => {
        dispatch(selectTaskListAction(id))
        dispatch(fetchTaskReqAction(id))
        dispatch(selectTaskAction(null))
        history.push(`/taskList`)
    }

    const editTaskList = () => {
        const payload = {caption: caption}
        dispatch(editTaskListReqAction(payload, props.id))
        selectMode()
    } 

    const removeTaskList = () => {
        dispatch(removeTaskListReqAction(props.id))
        history.push('/')
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
            <div className='taskList__options'>
                {isEditable ? <RiEditFill   
                        className='taskList__button' 
                        onClick={selectMode}
                    /> : <TiCancel
                        className='taskList__button' 
                        onClick={selectMode}
                />}
                {isEditable ? <RiDeleteBin5Fill 
                        className='taskList__button' 
                        onClick={removeTaskList}
                    /> : <RiSaveFill 
                        className='taskList__button' 
                        onClick={editTaskList}
                />}
            </div>
        </div>
    )
}