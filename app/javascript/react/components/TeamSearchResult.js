import React, { useState } from 'react'

const TeamSearchResult = (props) => {

    let nameUrl = `/teams/${props.id}`

    return(
        <div className = "card cell small-4 independence">
            <h4><a href = {nameUrl} className = "independence">Name:{props.name}</a></h4>
            <p className = "independence">Description: {props.description}</p>
        </div>
    )
}

export default TeamSearchResult