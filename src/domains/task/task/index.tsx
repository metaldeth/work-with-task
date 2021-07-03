import { FC } from "react";
import { FetchTask } from "../../../types/server/task";

type TaskProps = {
    task: FetchTask
}

export const Task: FC<TaskProps> = (props) => {
    const task = props.task

    return(            
        <div className='task'>
            <div className='task__caption'>{task.caption}</div>
            <div className='task__description'>{task.description}</div> 
        </div>
    )
}