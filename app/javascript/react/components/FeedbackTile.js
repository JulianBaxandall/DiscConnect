import React, {useState, useEffect} from "react";

const FeedbackTile = (props) => {
    const resolvedString = props.resolved.toString()

    const handleSubmit = (event) => {
        event.preventDefault()
        let newResolved = !props.resolved
        const formPayload = {
                resolved: newResolved,
                id : props.id
                }
        props.toggleResolved(event, formPayload)
    }

    return (
        <div className = "card cell small-4">
            <h5>{props.title}</h5>
            <p>Category: {props.category}</p>
            <p>Body: {props.body}</p>
            <p>Resolved?: {resolvedString}</p>
            <form onSubmit = {handleSubmit}>
                <input 
                    type="submit" 
                    value="Toggle Resolved"
                    className = "button"
                    />            
            </form>
        </div>
    )
}

export default FeedbackTile