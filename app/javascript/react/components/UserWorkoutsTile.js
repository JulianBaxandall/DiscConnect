import React, {useState, useEffect} from "react";

const UserWorkoutTile = (props) => {
    return (
        <div className = "cell small-4 independence">
            <div className = "card centered padded">
                <h5 className = "independence">{props.user.name}</h5>
                <p className = "independence">Number of workouts: {props.user.workouts.length}</p>
            </div>
        </div>
    )
}

export default UserWorkoutTile