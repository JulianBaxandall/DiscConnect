import React, { useState } from 'react'
import BlankComponent from './BlankComponent'
import TeamMemberTile from './TeamMemberTile'

const SearchBar = (props) => {
    const [results, setResults] = useState([])
    const [searchString, setSearchString] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        const body = JSON.stringify({
          search_string: searchString
        })
        try {
            const response = await fetch("/api/v1/users/search", {
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
            setResults(
                responseBody
                )
        } catch (error) {
          console.error(`Error in Fetch: ${error.message}`)
        }
    }

    const handleChange = (event) => {
        const newSearchString = event.target.value
        setSearchString(newSearchString)
    }

    let resultsComponents = <BlankComponent/>
    
    if (results[0]) {
        resultsComponents = results.map((user)=> {
            return(
                <TeamMemberTile 
                key = {user.id}
                id = {user.id}
                name = {user.name}
                email = {user.email}
                />
            )
        })
    } else {
        resultsComponents = (<div>No results found</div>)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Search</label>
                <input type='text' name='searchString' value={searchString} onChange={handleChange} />

                <input type='submit' value='Submit' />
            </form>
            {resultsComponents}
        </div>
    )
}

export default SearchBar