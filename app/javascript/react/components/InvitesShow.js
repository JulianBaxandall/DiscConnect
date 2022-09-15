import React, {useState, useEffect} from "react"
import { Route, Redirect } from 'react-router'

import BlankComponent from "./BlankComponent"
import InviteTile from "./InviteTile"

const InvitesShow = (props) => {
    const [invites, setInvites] = useState([])
    const [shouldRedirect, setShouldRedirect] = useState({
        status: false,
        teamId: null
    })

    const getInvites = async() => {
        try {
            const response = await fetch(`/api/v1/invites`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw error
            }
            const userInvites = await response.json()
            setInvites(userInvites)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`);
        }
    }
    
    
    const registerUser = async (event, formPayload) => {
        event.preventDefault()
        try { 
            let response = await fetch('/api/v1/registrations', 
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
            setShouldRedirect({
                status: true,
                teamId: responseBody.team_id
            })
        } catch (error) {
            console.log("error in fetch:", error)
        }
    }
    
    
    
    let userInviteTiles = <BlankComponent/>
    if (invites.length === 0){
       userInviteTiles =
       (
            <div className="cell centered">
                <h5>No invites pending</h5>
            </div>
        )
    } else {
        userInviteTiles = invites.map((invite) => {
            return(
                <InviteTile 
                key = {invite.id}
                role = {invite.role} 
                team_id = {invite.team_id}
                user_id = {invite.user_id}
                registerUser = {registerUser}
                />
            )
        })
    }

    useEffect(() => {
        getInvites()
    }, [])

    if (shouldRedirect.status === true) {
        return(
            <Redirect to={`/teams/${shouldRedirect.teamId}`}/>
            )
    }
    
    return (
        <div className = "grid-x grid-padding-x centered independence invites">
            <div className = "cell small-11 padded">
            <h3 className = "cell small-12">Team Invites:</h3>
                {userInviteTiles}
            </div>
        </div>
    )

}

export default InvitesShow