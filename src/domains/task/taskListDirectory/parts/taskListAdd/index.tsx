import { useState } from "react"
import { GrAdd, GrCheckmark, GrClear } from "react-icons/gr"
import { useDispatch } from "react-redux"
import { createTaskListReqAction } from "../../../../../redux/actions/taskList"
import './taskListAdd.scss'

export const TaskListAdd = () => {
    const [isEditable, setIsEditable] = useState(true)
    const [caption, setCaption] = useState('')
    const dispatch = useDispatch()

    const taskListAdd = () => {
        const payload = {caption}
        dispatch(createTaskListReqAction(payload))
        setCaption('')
        selectMode()
    }

    const selectMode = () => {
        setIsEditable(!isEditable)
    }
    return(
        <div className='taskListAdd'>
            <input 
                disabled={isEditable}
                type="text" 
                value={caption}
                onChange={e => setCaption(e.target.value)}
            />
            {/* <button
                disabled={isEditable}
                onClick={taskListAdd}
            >save</button>
            <button
                onClick={selectMode}
            >{isEditable ? 'create task list' : 'cancel'}</button> */}
            {isEditable ? <GrAdd onClick={selectMode}/> : <GrClear onClick={selectMode}/>}
            {(!isEditable && !!caption) ? <GrCheckmark onClick={taskListAdd}/> : null}
        </div>
    )
} 