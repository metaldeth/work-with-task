import { useState } from "react"
import { FC } from "react"
import { useDispatch } from "react-redux"
import { createTaskReqAction } from "../../../../../redux/actions/task"
import './taskAdd.scss'

type TaskAddProps = {
    taskListId: number
}

export const TaskAdd: FC<TaskAddProps> = (props) => {

    const [ active, setActive ] = useState(true)
    const [ caption, setCaption ] = useState('')
    const [ description, setDescription ] = useState('')

    const dispatch = useDispatch()

    const selectMode = () => {
        setActive(!active)
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
            >{active ? 'создать' : 'отменить'}</button>
            <div className='taskAdd__form'>
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
                <button
                    disabled={active || !isFullFormData}
                    onClick={taskAdd}
                >сохранить</button>
            </div>
        </div>
    )
}