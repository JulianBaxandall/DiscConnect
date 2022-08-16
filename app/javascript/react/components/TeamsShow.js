import React, {useState, useEffect} from "react"

const TeamsShow = (props) => {
    const [showTeam, setShowTeam] = useState("")
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

    return(
        <div>
            <h1>Team Name: {showTeam.name}</h1>
            <p>Description: {showTeam.description}</p>
        </div>
    )
}

export default TeamsShow