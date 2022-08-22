import React, {useState, useEffect} from "react" 

const TaskComponent = (props) => {
    return(
        <div className="card">
            <h6>{props.title}</h6>
            <p>{props.body}</p>
            <p>{props.urgency}</p>
        </div>
    )
}

export default TaskComponent