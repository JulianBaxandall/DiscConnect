import React, {useState, useEffect} from "react"

import TeamComponent from "./TeamComponent"

const TeamsIndex = (props) => {
    const [teams, setTeams] = useState([])

    const getTeams = async (props) => {
        try {
            const response = await fetch('api/v1/teams')
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)
            }
            const teamsData = await response.json()
            setTeams(teamsData)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }
    
    useEffect(() => {
        getTeams()
    }, [])

    const teamTiles = teams.map((team) => {
        return (<TeamComponent 
            key = {team.id}
            id = {team.id}
            name={team.name} 
            description = {team.description}/>
        )
    })

    return(
        <div className = "page grid-x grid-padding-x grid-y grid-padding-y">
            <h1>Teams Index Page</h1>
            {teamTiles}
        </div>
    )    
}

export default TeamsIndex