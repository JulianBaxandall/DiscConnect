import React, {useState, useEffect} from "react"
import { Route, Redirect } from 'react-router'
import WorkoutsNewForm from "./WorkoutsNewForm"


const WorkoutsNew = (props) => {

    const [shouldRedirect, setShouldRedirect] = useState(false)

    const submitWorkout = async (event, formPayload) => {
        event.preventDefault()
        try { 
            let response = await fetch('/api/v1/workouts', 
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
            setShouldRedirect(true)
        } catch (error) {
            console.log("error in fetch:", error)
        }
    }

    if (shouldRedirect === true) {
        return(
            <Redirect to="/teams"/>
        )
    }

    return(
        <div>
            <h2 className = "independence centered">New Workout</h2>
            <WorkoutsNewForm submitWorkout = {submitWorkout}/>
        </div>
    )
}

export default WorkoutsNew