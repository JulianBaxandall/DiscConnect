import React, {useState, useEffect} from "react"
import NewTeamForm from "./NewTeamForm"

const TeamsNew = (props) => {
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
        } catch (error) {
            console.log("error in fetch:", error)
        }
    }
    return(
        <div className = "form">
            <NewTeamForm submitTeam = {submitTeam}/>
        </div>

    )
}

export default TeamsNew