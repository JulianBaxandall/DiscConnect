import React, {useState, useEffect} from "react" 

const TaskComponent = (props) => {
    return(
        <div className="cell small-3 card padded">
            <h6>{props.title}</h6>
            <p>{props.body}</p>
            <p>{props.urgency}</p>
        </div>
    )
}

export default TaskComponent