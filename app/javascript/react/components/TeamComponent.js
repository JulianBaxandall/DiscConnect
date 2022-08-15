import React, {useState, useEffect} from "react";

const TeamComponent = (props) => {
    return (
        <div className = "card cell small-8">
            <h3>{props.name}</h3>
            <h6>{props.description}</h6>
        </div>
    )
}

export default TeamComponent