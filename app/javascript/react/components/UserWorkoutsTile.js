import React, {useState, useEffect} from "react";

const UserWorkoutTile = (props) => {
    return (
        <div className = "row independence">
            <div className = "name">
                <h5 className = "name independence">{props.user.name}</h5>
            </div>
            <div className = "score">
                <p className = "score independence">{props.user.workouts.length}</p>
            </div>
        </div>
    )
}

export default UserWorkoutTile