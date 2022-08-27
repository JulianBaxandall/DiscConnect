import React, {useState, useEffect} from "react"
import TeamComponent from "./TeamComponent"
import WorkoutShow from "./WorkoutShow"
import InvitesShow from "./InvitesShow"
import BlankComponent from "./BlankComponent"
import InviteForm from "./InviteForm"
import InviteFormToggler from "./InviteFormToggler"

const UserShow = (props) => {
    const [showUser, setShowUser] = useState({"teams":[], "workouts":[]})
    const [isUser, setIsUser] = useState(false)
    const [showInviteForm, setShowInviteForm] = useState(false)

    const getUser = async() => {
        try {
            const response = await fetch(`/api/v1/users/${props.match.params.id}`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw error
            }
            const showUserData = await response.json()
            setShowUser(showUserData.user)
            setIsUser(showUserData.sameUser)
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

    const userWorkouts = showUser.workouts.map((workout)=>{
        return (
            <WorkoutShow 
            className = "cell small-4"
            key = {workout.id}
            id = {workout.id}
            title={workout.title} 
            description = {workout.description}
            workout_type = {workout.workout_type}
            duration = {workout.duration}
            />
        )
    })

    let InvitesShowComponent = <BlankComponent/>
    if (isUser){
        InvitesShowComponent = <InvitesShow/>
    }

    let InvitesForm = <BlankComponent/>

    if (showInviteForm) {
        InvitesForm = <InviteForm userId = {props.match.params.id}/>
    } else {
        InvitesForm = <BlankComponent/>
    }

    return(
        <div className = "grid-x grid-padding-x centered">
            <div className = "padded cell small-11 card centered">
                <h1>{showUser.name}</h1>
                <h6>{showUser.email}</h6>
                <InviteFormToggler showInviteForm = {showInviteForm} setShowInviteForm = {setShowInviteForm}/>
                {InvitesForm}
            </div>
            <div className = "cell small-6">
                <ul className = "centered">
                    <h5 className = "independence">User's Teams:</h5>
                    {usersTeams}
                </ul>
            </div>
            <div className = "cell small-6 user-workouts">
                <ul className = "centered">
                    <h5 className = "independence">User's Workouts:</h5>
                    {userWorkouts}
                </ul>
            </div>
            <div className = "cell small-12 padded">
                {InvitesShowComponent}
            </div>
        </div>
    )
}

export default UserShow