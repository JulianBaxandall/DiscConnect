import React, {useState, useEffect} from "react"

const InviteFormToggler = (props) => {

    const toggleInviteForm = (event) => {
        event.preventDefault()
        props.setShowInviteForm(!props.showInviteForm)
    }

    return (
        <form onSubmit = {toggleInviteForm}>
            <div className = "cell small-10 centered">
                <input 
                type="submit" 
                value="Toggle Invite Form" 
                className = "button"
                />       
            </div>
        </form>
    )
}

export default InviteFormToggler