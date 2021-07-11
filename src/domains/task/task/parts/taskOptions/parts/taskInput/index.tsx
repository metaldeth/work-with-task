import { useState } from "react"
import { useDispatch } from "react-redux"
import { editTaskReqAction, removeTaskReqAction } from "../../../../../../../redux/actions/task"
import './taskInput.scss'
import { GrEdit, GrSubtractCircle, GrCheckmark, GrClose, GrTrash } from "react-icons/gr";

type Props = {
    caption: string,
    description: string,
    taskId: number,
    taskListId: number,
}

export const TaskInput = (props: Props) => {
    const dispatch = useDispatch()

    const [ isEditable, setIsEditable ] = useState(true)
    const [ caption, setCaption ] = useState(props.caption)
    const [ description, setDescription ] = useState(props.description)    
    const [ taskId, setTaskId ] = useState(props.taskId)

    if (taskId !== props.taskId) {
        setTaskId(props.taskId)
        setCaption(props.caption)
        setDescription(props.description)
        setIsEditable(true)
    }

    const selectMode = () => {
        setIsEditable (!isEditable)
        if (!isEditable) {
            setCaption(props.caption)
            setDescription(props.description)
        }
    }

    const editTask = () => {
        const payload = {caption, description, isComplete: false}
        dispatch(editTaskReqAction(payload, props.taskId, props.taskListId))
        setIsEditable(true)
    }

    const removeTask = () => {
        dispatch(removeTaskReqAction(props.taskId, props.taskListId))
    }

    return(
        <div className='taskInput'>
            <div className='task-block'>
                <input 
                    type="text"
                    placeholder='caption'
                    className='taskInput'
                    value={caption}
                    disabled={isEditable}
                    onChange={(e) => setCaption(e.target.value)}
                />
                <textarea 
                    rows={10} 
                    cols={20}
                    wrap="soft"
                    placeholder='description'
                    className='taskInput'
                    value={description}
                    disabled={isEditable}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className='button-block'>
                {isEditable ? <GrEdit onClick={selectMode}/> : <GrSubtractCircle onClick={selectMode}/>}
                {isEditable ? <GrTrash onClick={removeTask}/> : <GrCheckmark onClick={editTask}/>}
            </div>
        </div>
    )
}