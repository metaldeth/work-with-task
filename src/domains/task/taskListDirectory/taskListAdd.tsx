import { useState } from "react"
import { useDispatch } from "react-redux"
import { createTaskListReqAction } from "../../../redux/actions/taskList"
import './taskListDirectory.scss'

export const TaskListAdd = () => {
    const [active, setActive] = useState(true)
    const [caption, setCaption] = useState('')
    const dispatch = useDispatch()

    const taskListAdd = () => {
        const payload = {caption}
        dispatch(createTaskListReqAction(payload))
        setCaption('')
        selectMode()
    }

    const selectMode = () => {
        setActive(!active)
    }
    return(
        <div className='taskListAdd'>
            <input 
                disabled={active}
                type="text" 
                value={caption}
                onChange={e => setCaption(e.target.value)}
            />
            <button
                disabled={active}
                onClick={taskListAdd}
            >save</button>
            <button
                onClick={selectMode}
            >{active ? 'create task list' : 'calncel'}</button>
        </div>
    )
}