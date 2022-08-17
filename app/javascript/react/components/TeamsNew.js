import React, {useState, useEffect} from "react"
import { Route, Redirect } from 'react-router'

import NewTeamForm from "./NewTeamForm"

const TeamsNew = (props) => {
    const [shouldRedirect, setShouldRedirect] = useState({
        status: false,
        teamId: null
    })
    const submitTeam = async (event, formPayload) => {
        event.preventDefault()
        try { 
            let response = await fetch('/api/v1/teams', 
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
            setShouldRedirect({
                status: true,
                teamId: responseBody.id
            })
        } catch (error) {
            console.log("error in fetch:", error)
        }
    }

    if (shouldRedirect.status === true) {
        return(
            <Redirect to={`/teams/${shouldRedirect.teamId}`}/>
            )
    }
    return(
        <div className = "form">
            <NewTeamForm submitTeam = {submitTeam}/>
        </div>

    )
}

export default TeamsNew