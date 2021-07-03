import React, {useState} from "react";
// import './signIp.style.sass';
import { useDispatch } from "react-redux";
import { createTaskListReqAction } from "../../../redux/actions/taskList";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export const TaskListAdd = () => {
    const [caption, setCaption] = useState('')
    const dispatch = useDispatch();
    const history = useHistory();

    const taskListAdd = () => {
        dispatch(createTaskListReqAction({
            caption
        }))
        history.replace('/')
    }

    const isFullFormData: boolean = !!caption;

    return(
        <div className = "taskListAdd">
            taskListCreate
            <input
                type="text"
                placeholder='caption'
                className='taskListInput'
                value={caption}
                onChange={event => setCaption(event.target.value)}
            />
            <button
                disabled={!isFullFormData}
                className='taskButton'
                onClick={taskListAdd}
            >Create</button>
        </div>
    )
}