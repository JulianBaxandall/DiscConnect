import React, {useState, useEffect} from "react"

const NewTasksForm = (props) => {
    
    const [currentTask, setCurrentTask] = useState({
        title:"",
        body:"",
        urgency:"",
        user_id: ""
    })


    const handleChange = (event) => {
        setCurrentTask({
          ...currentTask,
          [event.currentTarget.name]: event.currentTarget.value,
        })
    }

    const handleUserIdChange = (event) => {
        setCurrentTask({
          ...currentTask,
          [event.currentTarget.name]: event.currentTarget.value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let formPayload = { task: currentTask }
        props.submitTask(event, formPayload)
    }


    const options = props.teamMembers.map((member) => {
        return(
            <option key= {member.id} value= {member.id}>{member.name}</option>
        )
    })
    options.unshift(<option key = {0} value={0}>None</option>)
    
    return(
        <form className = "grid-x grid-padding-x" onSubmit = {handleSubmit}>
            <div className = "cell small-10 form">
                <label className = "independence"> Title
                    <input type = "text" 
                    className = "rounded"
                    name = "title"
                    onChange={handleChange}
                    value = {currentTask.title}
                    />
                </label>
            </div>
            <div className = "cell small-10 form">
                <label className = "independence">Body
                    <input className = "cell small-10 rounded" 
                    type = "text"
                    name = "body"
                    onChange={handleChange}
                    value = {currentTask.body}
                    />
                </label>
            </div>
            <div className = "cell small-10 form">
                <label className = "independence">Urgency
                    <input 
                    className = "cell small-10 rounded" 
                    type = "text"
                    name = "urgency"
                    onChange={handleChange}
                    value = {currentTask.urgency}
                    />
                </label>
            </div>
            <div className = "cell small-10 form">
                <label className = "independence">Assigned
                    <select
                        className = "cell small-10 rounded"                     
                        name = "user_id"
                        onChange={handleUserIdChange}
                        value = {currentTask.user_id}
                        >
                            {options}
                    </select>
                </label>
            </div>
            <div className = "cell small-10 centered">
                <input 
                type="submit" 
                value="Add New Task" 
                className = "button"
                />       
            </div>
        </form>
    )
}

export default NewTasksForm