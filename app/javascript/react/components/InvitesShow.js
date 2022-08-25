import React, {useState, useEffect} from "react"
import InviteTile from "./InviteTile"

const InvitesShow = (props) => {
    const [invites, setInvites] = useState([])

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

    useEffect(() => {
        getInvites()
    }, [])

    const userInvites = invites.map((invite) => {
        return(
            <InviteTile 
            key = {invite.id}
            role = {invite.role} 
            team_id = {invite.team_id}
            user_id = {invite.user_id}
            />
        )
    })
    
    return (
        <div>Test
            {userInvites}
        </div>
    )

}

export default InvitesShow