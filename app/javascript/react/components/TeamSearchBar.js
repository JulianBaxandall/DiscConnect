import React, { useState } from 'react'
import BlankComponent from './BlankComponent'
import TeamSearchResult from './TeamSearchResult'

const TeamSearchBar = (props) => {
    const [teamResults, setTeamResults] = useState([])
    const [teamSearchString, setTeamSearchString] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        const body = JSON.stringify({
          search_string: teamSearchString
        })
        try {
            const response = await fetch("/api/v1/teams/search", {
                method: "POST",
                body: body,
                headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
                }
            })
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                throw new Error(errorMessage)
            }
            const responseBody = await response.json()
            setTeamResults(
                responseBody
                )
        } catch (error) {
          console.error(`Error in Fetch: ${error.message}`)
        }
    }

    const handleChange = (event) => {
        const newSearchString = event.target.value
        setTeamSearchString(newSearchString)
    }

    let resultsComponents = <BlankComponent/>
    
    if (teamResults[0]) {
        resultsComponents = teamResults.map((team)=> {
            return(
                <TeamSearchResult
                    key = {team.id}
                    id = {team.id}
                    name = {team.name}
                    description = {team.description}
                />
            )
        })
    } else {
        resultsComponents = (<div>No results found</div>)
    }

    return (
        <div className = "independence">
            <form onSubmit={handleSubmit}>
                <label className = "independence">Team Search</label>
                <input className = "rounded" type='text' name='teamSearchString' value={teamSearchString} onChange={handleChange} />

                <input className = "button rounded" type='submit' value='Search Teams' />
            </form>
            {resultsComponents}
        </div>
    )
}

export default TeamSearchBar