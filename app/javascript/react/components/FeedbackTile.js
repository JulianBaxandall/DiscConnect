import React, {useState, useEffect} from "react";

const FeedbackTile = (props) => {
    return (
        <div className = "card cell small-4 independence">
            <h5>{props.title}</h5>
            <p>Category: {props.category}</p>
            <p>Body: {props.body}</p>
        </div>
    )
}

export default FeedbackTile