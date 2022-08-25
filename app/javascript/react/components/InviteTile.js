import React, {useState, useEffect} from "react";

const InviteTile = (props) => {
    return (
        <div className = "card">
            <p>User Id: {props.user_id}</p>
            <p>Team Id: {props.team_id}</p>
            <p>As Role: {props.role}</p>
        </div>
    )
}

export default InviteTile