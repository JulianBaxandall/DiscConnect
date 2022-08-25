import React, { useState } from 'react'

const TeamSearchResult = (props) => {

    let nameUrl = `/teams/${props.id}`

    return(
        <div className = "card cell small-4">
            <h4><a href = {nameUrl}>Name:{props.name}</a></h4>
            <p>Description: {props.description}</p>
        </div>
    )
}

export default TeamSearchResult