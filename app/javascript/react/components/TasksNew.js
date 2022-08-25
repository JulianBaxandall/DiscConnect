import React, {useState, useEffect} from "react"
import BlankComponent from "./BlankComponent"
import NewTasksForm from "./NewTasksForm"
import TeamMemberTile from "./TeamMemberTile"

const TasksNew = (props) => {
    const [teamMembers, setTeamMembers] = useState([])
    const [currentRole, setCurrentRole] = useState("")

    const getTeamMembers = async () => {
        try {
            const response = await fetch(`/api/v1/teams/${props.match.params.id}`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)
            }
            const teamsData = await response.json()
            setTeamMembers(teamsData.team.users)
            setCurrentRole(teamsData.user.role)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    const submitTask = async (event, formPayload) => {
        event.preventDefault()
        try { 
            let response = await fetch(`/api/v1/teams/${props.match.params.id}/tasks`, 
            {
                credentials: "same-origin",
                method: "POST",
                headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                },
                body: JSON.stringify(formPayload)
            })
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`;
                throw new Error(errorMessage) 
            }
            const responseBody = await response.json()
        } catch (error) {
            console.log("error in fetch:", error)
        }
    }
    
    useEffect(() => {
        getTeamMembers()
    }, [])

    let teamMemberTiles = teamMembers.map((user) => {
        return(<TeamMemberTile 
            key = {user.id}
            id = {user.id}
            name = {user.name}
            email = {user.email}
            />
        )
    })

    let newTaskFormInstance = <NewTasksForm submitTask = {submitTask} teamMembers = {teamMembers}/>

    if (currentRole != "captain"){
        teamMemberTiles = <BlankComponent />
        newTaskFormInstance = <BlankComponent />
    }

    return (
        <div>
            {teamMemberTiles}
            {newTaskFormInstance}
        </div>
    )
}

export default TasksNew