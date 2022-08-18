import React, {useState, useEffect} from "react"

const TeamFeedback = (props) => {
    const [teamFeedback, setTeamFeedback] = useState([])

    const getTeamFeedback = async () => {
        try {
            const response = await fetch(`/api/v1/feedback/${props.match.params.id}`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw error
            }
            const teamFeedbackData = await response.json()
            setTeamFeedback(teamFeedbackData)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`);
        }
    }

    useEffect(() => {
        getTeamFeedback()
    }, [])

    return (
        <div>
            <h1>Feedback</h1>
        </div>
    )
}

export default TeamFeedback