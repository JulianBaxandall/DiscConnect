import React, {useState, useEffect} from "react";

const TeamComponent = (props) => {
    const teamUrl = `/teams/${props.id}`
    return (
        <div className = "card cell small-8">
            <h3><a href = {teamUrl}> {props.name}</a></h3>
            <h6>{props.description}</h6>
        </div>
    )
}

export default TeamComponent