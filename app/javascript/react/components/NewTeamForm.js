import React, {useState, useEffect} from "react"

const NewTeamForm = (props) => {
    const [currentTeam, setCurrentTeam] = useState({
        name:"",
        description:"",
        division:""
    })
    const handleChange = (event) => {
        setCurrentTeam({
          ...currentTeam,
          [event.currentTarget.name]: event.currentTarget.value,
        })
      }   
      
    const handleSubmit = (event) => {
        event.preventDefault()
        let formPayload = { team: currentTeam }
        props.submitTeam(event, formPayload)
        setCurrentTeam({
            name: "",
            description: "",
            division: ""
        })
    }
      
    return (
        <form className = "grid-x grid-padding-x" onSubmit = {handleSubmit}>
            <div className = "cell small-10 form">
                <label className = "independence"> Name
                    <input type = "text" 
                    className = "rounded"
                    name = "name"
                    onChange={handleChange}
                    value = {currentTeam.name}
                    />
                </label>
            </div>
            <div className = "cell small-10 form">
                <label className = "independence">Description
                    <input className = "cell small-10 rounded" 
                    type = "text"
                    name = "description"
                    onChange={handleChange}
                    value = {currentTeam.description}
                    />
                </label>
            </div>
            <div className = "cell small-10 form">
                <label className = "independence">Division
                    <input 
                    className = "cell small-10 rounded" 
                    type = "text"
                    name = "division"
                    onChange={handleChange}
                    value = {currentTeam.division}
                    />
                </label>
            </div>
            <div className = "cell small-10 centered">
                <input 
                type="submit" 
                value="Add New Team" 
                className = "button"
                />       
            </div>
        </form>
    )
}

export default NewTeamForm