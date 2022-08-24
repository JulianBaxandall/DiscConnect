import React, {useState, useEffect} from "react"

const WorkoutShow = (props) => {

    return(
        <div className = "card cell small-8">
            <h5>{props.title}</h5>
            <p>Workout: {props.workout_type}</p>
            <p>Description: {props.description}</p>
            <p>Duration (min): {props.duration}</p>
        </div>
    )

}

export default WorkoutShow