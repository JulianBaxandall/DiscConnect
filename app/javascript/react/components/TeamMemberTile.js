import React, {useState, useEffect} from "react";

const TeamMemberTile = (props) => {
    let nameUrl = `/users/${props.id}`
    return (
        <div className = "card cell small-4 independence">
            <h4><a href = {nameUrl} className = "independence">Name:{props.name}</a></h4>
            <p className = "independence">Email: {props.email}</p>
        </div>
    )
}

export default TeamMemberTile