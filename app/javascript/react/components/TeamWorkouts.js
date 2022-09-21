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
                key = {user.id}
                user = {user}
            />
        )
    })

    return (
        <div className="grid-x grid-padding-x">
            
            <div className = "cell small-8 independence">
                <h3>Teams Workouts: {team.name}</h3>
                <div className = "container">
                    <div className = "row independence">
                        <div className = "name">
                            <h5 className = "name independence">Name:</h5>
                        </div>
                        <div className = "score">
                            <p className = "score independence">T</p>
                            <p className = "score independence">L</p>
                            <p className = "score independence">R</p>
                            <p className = "score independence">O</p>
                        </div>
                    </div>
                    {workouts}
                </div>
            </div>
            <div className="cell small-2 key">
                <h5>Key:</h5>
                <p>T = Throwing</p>
                <p>L = Lifting</p>
                <p>R = Running</p>
                <p>O = Other</p>
            </div>

        </div>
    )
}

export default TeamWorkouts