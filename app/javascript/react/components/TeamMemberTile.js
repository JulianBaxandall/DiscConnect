import React, {useState, useEffect} from "react";

const TeamMemberTile = (props) => {
    return (
        <div className = "card cell small-4 independence">
            <h4>Name:{props.name}</h4>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default TeamMemberTile