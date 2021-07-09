import { useState } from "react"
import { FC } from "react"
import { useDispatch } from "react-redux"
import { createTaskReqAction } from "../../../../../redux/actions/task"
import './taskAdd.scss'

type TaskAddProps = {
    taskListId: number
}

export const TaskAdd: FC<TaskAddProps> = (props) => {

    const [ isEditable, setIsEditable ] = useState(true)
    const [ caption, setCaption ] = useState('')
    const [ description, setDescription ] = useState('')

    const dispatch = useDispatch()

    const selectMode = () => {
        setIsEditable(!isEditable)
    }

    const taskAdd = () => {
        const payload = {caption, description}
        dispatch(createTaskReqAction(
            payload,
            props.taskListId,
        ))
        selectMode()
        setCaption('')
        setDescription('')
    }

    const isFullFormData: boolean = !!caption && !!description;

    return(
        <div className='taskAdd'>
            <button
                onClick={selectMode}
            >{isEditable ? 'создать' : 'отменить'}</button>
            <div className='taskAdd__form'>
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
                <button
                    disabled={isEditable || !isFullFormData}
                    onClick={taskAdd}
                >сохранить</button>
            </div>
        </div>
    )
}