import React, {useState, useEffect} from "react"

import NewFeedbackForm from "./NewFeedbackForm"
import FeedbackTile from "./FeedbackTile"

const TeamFeedback = (props) => {
    const [teamFeedback, setTeamFeedback] = useState(null)

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
                setTeamFeedback(teamFeedbackData.feedback)
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

    useEffect(() => {
        getTeamFeedback()
    }, [])

    let responses = "no feedback to display"
    if (teamFeedback){
        responses = teamFeedback.map((feedback)=>{
            return(
                <FeedbackTile 
                key = {feedback.id}
                title = {feedback.title} 
                body = {feedback.body} 
                category = {feedback.category}/>
            )
        })
    }

    return (
        <div className = "page grid-x grid-padding-x grid-y grid-padding-y">
            <h1>Feedback</h1>
            <NewFeedbackForm submitFeedback = {submitFeedback} />
            <h5>Feedback:</h5>
            {responses}
        </div>
    )
}
export default TeamFeedback