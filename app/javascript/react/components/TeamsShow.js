import React, {useState, useEffect} from "react"
import TeamMemberTile from "./TeamMemberTile"

const TeamsShow = (props) => {
    const [showTeam, setShowTeam] = useState({"users" :[]})
    const getTeam = async () => {
        try {
            const response = await fetch(`/api/v1/teams/${props.match.params.id}`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw error
            }
            const showTeamData = await response.json()
            setShowTeam(showTeamData)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`);
        }
    }

    useEffect(() => {
        getTeam();
      }, []);

    const teamMembers = showTeam.users.map((user) => {
        return(<TeamMemberTile 
            key = {user.id}
            name = {user.name}
            email = {user.email}
            />
        )
    })

    return(
        <div className = "page grid-x grid-padding-x grid-y grid-padding-y">            
            <h1>Team Name: {showTeam.name}</h1>
            <p>Description: {showTeam.description}</p>
            <h3>Team Members:</h3>
            {teamMembers}
        </div>
    )
}

export default TeamsShow