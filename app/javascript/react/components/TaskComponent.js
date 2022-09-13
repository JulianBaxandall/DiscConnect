import React, {useState, useEffect} from "react" 
import BlankComponent from "./BlankComponent"

const TaskComponent = (props) => {
    const [resolved, setResolved] = useState(false)

    const resolve = async (event) => {
        event.preventDefault()
        const formPayload = {task_id: props.id}
        try {
            const response = await fetch("/api/v1/tasks/update", {
                method: "POST",
                body: JSON.stringify(formPayload),
                headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
                }
            })
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                throw new Error(errorMessage)
            }
            setResolved(true)
        } catch (error) {
          console.error(`Error in Fetch: ${error.message}`)
        }
    }

    if(resolved){
        return(
            <BlankComponent/>
        )
    }

    return(
        <div className="cell small-3 card padded">
            <h6>{props.title}</h6>
            <p>{props.body}</p>
            <p>{props.urgency}</p>
            <form onSubmit = {resolve}>
                <input 
                    type="submit" 
                    value="Resolve"
                    className = "button"
                />            
            </form>
        </div>
    )
}

export default TaskComponent