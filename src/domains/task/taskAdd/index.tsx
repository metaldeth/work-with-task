import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTaskReqAction } from "../../../redux/actions/task";
import { useHistory } from "react-router";
import { selectListOfTaskList } from "../../../redux/selectors/selectTaskList";

export const TaskAdd = () => {
    const [caption, setCaption] = useState('');
    const [description, setDiscription] = useState('');
    const [taskListId, setTaskListId] = useState(0)

    const taskList = useSelector(selectListOfTaskList())

    const dispatch = useDispatch();
    const history = useHistory();

    const taskAdd = () => {
        const payload = {caption, description}
        dispatch(createTaskReqAction(
            payload,
            taskListId,
        ))
        history.replace('/')
    }
    
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTaskListId(Number(e.target.value));
    }

    const isFullFormData: boolean = !!caption && !!description && !!taskListId;

    return(
        <div className = "taskAdd">
            taskCreate
            <input
                type="text"
                placeholder='caption'
                className='taskInput'
                value={caption}
                onChange={event => setCaption(event.target.value)}
            />
            <input
                type="text"
                placeholder='description'
                className='taskInput'
                value={description}
                onChange={event => setDiscription(event.target.value)}
            />
            <select value = {taskListId} onChange={handleChange}>
                {taskList.map((item) => {
                    return(
                        <option value={item.id}>{item.caption}</option>
                    )})}
            </select>
            <button
                disabled={!isFullFormData}
                className='taskButton'
                onClick={taskAdd}
            >Create</button>
        </div>
    )
}