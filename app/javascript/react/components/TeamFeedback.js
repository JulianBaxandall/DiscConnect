import React, {useState, useEffect} from "react"

import NewFeedbackForm from "./NewFeedbackForm"
import FeedbackTile from "./FeedbackTile"
import BlankComponent from "./BlankComponent"
import ResolvedFeedbackForm from "./ResolvedFeedbackComponent"

const TeamFeedback = (props) => {
    const [teamFeedback, setTeamFeedback] = useState(null)
    const [userRole, setUserRole] = useState(null)

    const getTeamFeedback = async () => {
        try {
            const response = await fetch(`/api/v1/teams/${props.match.params.id}/feedback`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw error
            }
            const teamFeedbackData = await response.json()
            if (teamFeedbackData.feedback){
                setUserRole("captain")
                setTeamFeedback(teamFeedbackData.feedback)
            } else if (teamFeedbackData.role){
                setUserRole(teamFeedbackData.role)
            } else {
                setUserRole(null)
            }
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`);
        }
    }

    const submitFeedback = async (event, formPayload) => {
        event.preventDefault()
        try { 
            let response = await fetch(`/api/v1/teams/${props.match.params.id}/feedback`, 
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
        } catch (error) {
            console.log("error in fetch:", error)
        }
    }

    const toggleResolved = async (event, formPayload) => {
        event.preventDefault()
        try {
            const response = await fetch("/api/v1/feedback/update", {
                method: "POST",
                body: JSON.stringify(formPayload),
                headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
                }
            })
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                throw new Error(errorMessage)
            }
        } catch (error) {
          console.error(`Error in Fetch: ${error.message}`)
        }
    }

    useEffect(() => {
        getTeamFeedback()
    }, [])

    let resolvedFeedback = []
    let responses = "no feedback to display"
    if (teamFeedback){
        responses = teamFeedback.map((feedback)=>{
            if(!feedback.resolved){
                return(
                    <FeedbackTile 
                    key = {feedback.id}
                    id = {feedback.id}
                    title = {feedback.title} 
                    body = {feedback.body} 
                    resolved = {feedback.resolved}
                    category = {feedback.category}
                    toggleResolved = {toggleResolved}
                    />
                )
            } else {
                resolvedFeedback.push(feedback)
            }
        })
    }

    let optionalFeedbackForm = <BlankComponent/>
    if (userRole){
        optionalFeedbackForm = <NewFeedbackForm submitFeedback = {submitFeedback} />
    }

    const resolvedFeedbackComp = <ResolvedFeedbackForm resolvedFeedback = {resolvedFeedback}/>

    return (
        <div className = "page grid-x grid-padding-x grid-y grid-padding-y">
            <h1>Feedback</h1>
            {optionalFeedbackForm}
            <h5>Feedback:</h5>
            {responses}
            {resolvedFeedbackComp}
        </div>
    )
}
export default TeamFeedback