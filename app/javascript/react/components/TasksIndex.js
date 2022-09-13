import React, {useState, useEffect} from "react"
import TaskComponent from "./TaskComponent"

const TasksIndex = (props) => {
    const [userTasks, setUserTasks] = useState([])

    const getTasks = async () => {
        try {    
            const response = await fetch(`/api/v1/teams/${props.match.params.id}/tasks`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw error
            }
            const userTasksData = await response.json()
            setUserTasks(userTasksData)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`);
        }
    }

    useEffect(() => {
        getTasks()
    }, [])

    const tasks = userTasks.map((task)=> {
        return(
            <TaskComponent
                key = {task.id}
                id = {task.id}
                title = {task.title}
                body = {task.body}
                urgency = {task.urgency}
            />
        )
    })
    return (
        <div className = "grid-x grid-padding-x independence">
            <h1 className = "cell small-12">Tasks Index Page</h1>
            {tasks}
        </div>
    )
}

export default TasksIndex