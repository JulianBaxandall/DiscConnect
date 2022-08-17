import React, {useState, useEffect} from "react"
import UserWorkoutTile from "./UserWorkoutsTile"

const TeamWorkouts = (props) => {
    const [team, setTeam] = useState([])
    const [teamPlayers, setTeamPlayers] = useState([])

    const getPlayersWorkouts = async () => {
        try {
            const response = await fetch(`/api/v1/teams/${props.match.params.id}/workouts`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw error
            }
            const teamWorkoutData = await response.json()
            console.log(teamWorkoutData)
            setTeam(teamWorkoutData)
            setTeamPlayers(teamWorkoutData.users)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`);
        }
    }

    useEffect(() => {
        getPlayersWorkouts()
      }, [])
    
    
    let workouts = teamPlayers.map((user)=>{
        return (
            <UserWorkoutTile
                user = {user}
            />
        )
    })

    return (
        <div className = "independence">
            <h3>Teams Workouts: {team.name}</h3>
            <div className = "page grid-x grid-padding-x grid-y grid-padding-y">{workouts}</div>
        </div>
    )
}

export default TeamWorkouts