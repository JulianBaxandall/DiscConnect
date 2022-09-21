import React, {useState, useEffect} from "react";

const UserWorkoutTile = (props) => {
    const workouts = props.user.workouts
    
    let throwing = 0
    let lifting = 0
    let running = 0
    let film = 0
    let other = 0

    for (let i = 0; i < workouts.length; i++) {
        if (workouts[i]['workout_type'] === 'throwing'){
            throwing ++
        } else if (workouts[i]['workout_type'] === 'lifting'){
            lifting ++
        } else if (workouts[i]['workout_type'] === 'running'){
            running ++
        } else if (workouts[i]['workout_type'] === 'film'){
            film ++
        } else if (workouts[i]['workout_type'] === 'other'){
            other ++
        }
    }

    return (
        <div className = "row independence">
            <div className = "name">
                <h5 className = "name independence">{props.user.name}</h5>
            </div>
            <div className = "score">
                <p className = "score independence">{throwing}</p>
                <p className = "score independence">{lifting}</p>
                <p className = "score independence">{running}</p>
                <p className = "score independence">{other}</p>
            </div>
        </div>
    )
}

export default UserWorkoutTile