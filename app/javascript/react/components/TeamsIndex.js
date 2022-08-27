import React, {useState, useEffect} from "react"

import TeamComponent from "./TeamComponent"
import BlankComponent from "./BlankComponent"
import MyImage from "/Users/julianbaxandall/Desktop/Launch Academy/Breakable-Toy/app/assets/images/natties-47.jpeg"

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
            setTeams(teamsData.teams)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }
    
    useEffect(() => {
        getTeams()
    }, [])

    let optionalEmptyMessage = "Uh oh, looks like there are no teams to display!"
    let teamTiles = <BlankComponent/>
    if (teams.length > 0){
        optionalEmptyMessage = ""
        teamTiles = teams.map((team) => {
            return (<TeamComponent 
                key = {team.id}
                id = {team.id}
                name={team.name}
                description = {team.description}/>
            )
        })
    }

    return(
        <div className = "page grid-x grid-padding-x grid-y grid-padding-y">
            <h1>My Teams</h1>
            <img class = "full-page-image" src={MyImage} />
            {teamTiles}
            <h3>{optionalEmptyMessage}</h3>
        </div>
    )    
}

export default TeamsIndex