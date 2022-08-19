import React, {useState, useEffect} from "react"

const WorkoutsNewForm = (props) => {

    const [currentWorkout, setCurrentWorkout] = useState({
        title:"",
        description:"",
        duration:"",
        workout_type:"other"
    })

    const handleChange = (event) => {
        setCurrentWorkout({
          ...currentWorkout,
          [event.currentTarget.name]: event.currentTarget.value,
        })
      }

    const handleSubmit = (event) => {
        event.preventDefault()
        let formPayload = { workout: currentWorkout }
        props.submitWorkout(event, formPayload)
        setCurrentWorkout({
            title:"",
            description:"",
            duration:"",
            workout_type:"other"
        })
    }

    return (
        <form className = "grid-x grid-padding-x" onSubmit = {handleSubmit}>
            <div className = "cell small-10 form">
                <label className = "independence"> Title
                    <input type = "text" 
                    className = "rounded"
                    name = "title"
                    onChange={handleChange}
                    value = {currentWorkout.title}
                    />
                </label>
            </div>
            <div className = "cell small-10 form">
                <label className = "independence">Description
                    <input className = "cell small-10 rounded" 
                    type = "text"
                    name = "description"
                    onChange={handleChange}
                    value = {currentWorkout.description}
                    />
                </label>
            </div>
            <div className = "cell small-10 form">
                <label className = "independence">Duration
                    <input 
                    className = "cell small-10 rounded" 
                    type = "text"
                    name = "duration"
                    onChange={handleChange}
                    value = {currentWorkout.division}
                    />
                </label>
            </div>
            <div className = "cell small-10 form">
                <label className = "independence rounded">Workout Type
                    <select                    
                        name = "workout_type"
                        onChange={handleChange}
                        value = {currentWorkout.workout_type}>
                            <option value="throwing">Throwing</option>
                            <option value="running">Running</option>
                            <option value="lifting">Lifting</option>
                            <option value="film">Film</option>
                            <option value="other">Other</option>
                    </select>
                </label>
            </div>
            <div className = "cell small-10 centered">
                <input 
                type="submit" 
                value="Add New Workout"
                className = "button"
                />       
            </div>
        </form>
    )
}

export default WorkoutsNewForm