import React, {useState, useEffect} from "react"
import TeamMemberTile from "./TeamMemberTile"
import BlankComponent from "./BlankComponent"

const TeamsShow = (props) => {
    const [showTeam, setShowTeam] = useState({"users" :[]})
    const [currentRole, setCurrentRole] = useState("")
    const getTeam = async () => {
        try {
            const response = await fetch(`/api/v1/teams/${props.match.params.id}`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw error
            }
            const showTeamData = await response.json()
            setShowTeam(showTeamData.team)
            setCurrentRole(showTeamData.user.role)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`);
        }
    }
    
    useEffect(() => {
        getTeam()
      }, [])

    const teamMembers = showTeam.users.map((user) => {
        return(<TeamMemberTile 
            key = {user.id}
            id = {user.id}
            name = {user.name}
            email = {user.email}
            />
        )
    })

    const workoutsUrl = `/teams/${showTeam.id}/workouts`
    const feedbackUrl = `/teams/${showTeam.id}/feedback`
    const tasksUrl = `/teams/${showTeam.id}/tasks`
    const newTasksUrl = `/teams/${showTeam.id}/tasksnew`

    let newTaskButton = <BlankComponent />
    if (currentRole === "captain"){
        newTaskButton = <h5><a href = {newTasksUrl} className = "button"> New Task</a></h5>
    }

    return(
        <div>
            <div className = "grid-x independence centered">    
                <div className = "cell small-12">
                    <h1>Team Name: {showTeam.name}</h1>
                </div>
                <div className = "cell small-2">
                    <h5><a href = {workoutsUrl} className = "button"> Workouts</a></h5>
                    <h5><a href = {feedbackUrl} className = "button"> Feedback</a></h5>
                    <h5><a href = {tasksUrl} className = "button"> My Tasks</a></h5>
                    {newTaskButton}
                </div>
                <div className = "cell small-8">
                    <img className = "cover-image" src = "https://cdn.ultiworld.com/wordpress/wp-content/uploads/2022/05/D1Champs_PMR_20220529112024PMR_8037_225-ZF-2059-92641-1-007.jpg"/>
                </div>
                <div className = "cell small-12">
                    <p className = "independence">Description: {showTeam.description}</p>
                    <h3>Team Members:</h3>
                </div>
            </div>
            <div className="padded">
                {teamMembers}
            </div>
        </div>
    )
}

export default TeamsShow


/* <div className = "page grid-x grid-padding-x grid-y grid-padding-y independence">            
<h1>Team Name: {showTeam.name}</h1>
<div>
    <div className = "cell small-3">
        <h5><a href = {workoutsUrl} className = "button"> Workouts</a></h5>
    </div>
    <div className = "cell small-3">
        <h5><a href = {feedbackUrl} className = "button"> Feedback</a></h5>
    </div>
    <div className = "cell small-3">
        <h5><a href = {tasksUrl} className = "button"> My Tasks</a></h5>
    </div>
    <div className = "cell small-3">
        {newTaskButton}
    </div>
</div>
<p className = "independence">Description: {showTeam.description}</p>
<h3>Team Members:</h3>
{teamMembers}
</div> */