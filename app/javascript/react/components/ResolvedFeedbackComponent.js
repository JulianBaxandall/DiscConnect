import React, {useState, useEffect} from "react"
import BlankComponent from "./BlankComponent"
import FeedbackTile from "./FeedbackTile"

const ResolvedFeedbackForm = (props) => {
    const [showResolved, setShowResolved] = useState(false)

    const toggleResolved = async (event, formPayload) => {
        event.preventDefault()
        let newResolved = !props.resolved
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
                throw new Error(errorMessage)}
        } catch (error) {
          console.error(`Error in Fetch: ${error.message}`)
        }
    }

    let resolved = <BlankComponent/>
    if(!showResolved){
        resolved = <BlankComponent/>
    } else {
        resolved = props.resolvedFeedback.map((feedback)=>{
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
        })
    }

    const toggleResolvedFeedback = (event) => {
        event.preventDefault()
        let newValue = !showResolved
        setShowResolved(newValue)
    }

    return(
        <div>
            <form onSubmit = {toggleResolvedFeedback}>
            <input 
                type="submit" 
                value="Toggle Resolved Feedback"
                className = "button"
                />       
            </form>
            <h4>Resolved Feedback:</h4>
            {resolved}
        </div>
    )
}

export default ResolvedFeedbackForm
