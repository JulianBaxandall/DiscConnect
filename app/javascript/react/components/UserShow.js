import React, {useState, useEffect} from "react"
import TeamComponent from "./TeamComponent"

const UserShow = (props) => {
    const [showUser, setShowUser] = useState({"teams":[]})
    const getUser = async() => {
        try {
            const response = await fetch(`/api/v1/users/${props.match.params.id}`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw error
            }
            const showUserData = await response.json()
            setShowUser(showUserData)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`);
        }
    }

    useEffect(() => {
        getUser()
      }, [])

    const usersTeams = showUser.teams.map((team)=>{
        return (
            <TeamComponent className = "cell small-4"
            key = {team.id}
            id = {team.id}
            name={team.name} 
            description = {team.description}/>
        )
    })
    return(
        <div className = "grid-x grid-padding-x grid-y grid-padding-y centered">
            <div className = "padded cell small-11 card centered">
                <h1>{showUser.name}</h1>
                <h6>{showUser.email}</h6>
            </div>
            <div className = "cell small-4">
                <ul className = "centered">
                    <h5>User's Teams:</h5>
                    {usersTeams}
                </ul>
            </div>
        </div>
    )
}

export default UserShow