import React, {useState, useEffect} from "react"

const InviteForm = (props) => {

    const [captainedTeams, setCaptainedTeams] = useState([])
    const [currentInvite, setCurrentInvite] = useState({
        role:"member",
        team_id: "", 
        user_id: props.userId,
        message: ""
    })

    const getCaptaincies = async () => {
        try {
            const response = await fetch(`/api/v1/teams/captaincy`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)
            }
            const teamsData = await response.json()
            setCaptainedTeams(teamsData)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        let formPayload = { invite: currentInvite }
        try { 
            let response = await fetch(`/api/v1/invites`, 
            {
                credentials: "same-origin",
                method: "POST",
                headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                },
                body: JSON.stringify(formPayload)
            })
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`;
                throw new Error(errorMessage) 
            }
            const responseBody = await response.json()
        } catch (error) {
            console.log("error in fetch:", error)
        }
    }




    const handleChange = (event) => {
        setCurrentInvite({
          ...currentInvite,
          [event.currentTarget.name]: event.currentTarget.value,
        })
    }

    useEffect(() => {
        getCaptaincies()
      }, [])

    const options = captainedTeams.map((team) => {
        return(
            <option key= {team.id} value= {team.id}>{team.name}</option>
        )
    })
    options.unshift(<option key = {0} value={0}>None</option>)

    return (
        <div className = "grid-x grid-padding-x">
            <form className = "cell small-12" onSubmit = {handleSubmit}>
                <select
                className = "cell small-10 rounded"                     
                name = "team_id"
                onChange={handleChange}
                value = {currentInvite.team_id}
                >
                    {options}
                </select>
                <select
                className = "cell small-10 rounded"                     
                name = "role"
                onChange={handleChange}
                value = {currentInvite.role}
                >
                    <option value= "member">Member</option>
                    <option value= "captain">Captain</option>
                </select>
                <label className="nav-bar">Message
                    <input className = "cell small-10 rounded" 
                    type = "text"
                    name = "message"
                    onChange={handleChange}
                    value = {currentInvite.message}
                    />
                </label>
                <div className = "cell small-10 centered">
                    <input 
                    type="submit" 
                    value="Invite User to Team" 
                    className = "button"
                    />       
                </div>
            </form>
        </div>
    )
}

export default InviteForm