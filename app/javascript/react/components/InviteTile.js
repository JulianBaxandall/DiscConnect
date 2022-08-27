import React, {useState, useEffect} from "react";

const InviteTile = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        let formPayload = { user_id: props.user_id, team_id: props.team_id, role: props.role }
        props.registerUser(event, formPayload)
    }

    return (
        <div className = "invite">
            <p>User Id: {props.user_id}</p>
            <p>Team Id: {props.team_id}</p>
            <p>As Role: {props.role}</p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="submit" 
                    value="Accept Invite" 
                    className = "button"
                    /> 
            </form>
        </div>
    )
}

export default InviteTile