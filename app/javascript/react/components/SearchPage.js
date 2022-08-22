import React, { useState } from 'react'

import UserSearchBar from './UserSearchBar'
import TeamSearchBar from './TeamSearchBar'

const SearchPage = (props) => {
    return(
        <div className = "grid-x grid-margin-x">
            <div className = "cell small-12 medium-6 centered padded">
                <UserSearchBar/>
            </div>
            <div className = "cell small-12 medium-6 centered padded">
                <TeamSearchBar/>
            </div>
        </div>
    )
}

export default SearchPage