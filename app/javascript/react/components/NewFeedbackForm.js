import React, {useState, useEffect} from "react"

const NewFeedbackForm = (props) => {
    const [currentFeedback, setCurrentFeedback] = useState({
        title:"",
        body:"",
        category:""
    })
    const handleChange = (event) => {
        setCurrentFeedback({
          ...currentFeedback,
          [event.currentTarget.name]: event.currentTarget.value,
        })
      }   
      
    const handleSubmit = (event) => {
        event.preventDefault()
        let formPayload = { feedback: currentFeedback }
        props.submitFeedback(event, formPayload)
        setCurrentFeedback({
            title:"",
            body:"",
            category:""
        })
    }
      
    return (
        <form className = "grid-x grid-padding-x" onSubmit = {handleSubmit}>
            <div className = "cell small-10 form">
                <label className = "independence"> Title
                    <input type = "text" 
                    className = "rounded"
                    name = "title"
                    onChange={handleChange}
                    value = {currentFeedback.title}
                    />
                </label>
            </div>
            <div className = "cell small-10 form">
                <label className = "independence">Category
                    <input className = "cell small-10 rounded" 
                    type = "text"
                    name = "category"
                    onChange={handleChange}
                    value = {currentFeedback.category}
                    />
                </label>
            </div>
            <div className = "cell small-10 form">
                <label className = "independence">Body
                    <input 
                    className = "cell small-10 rounded" 
                    type = "text"
                    name = "body"
                    onChange={handleChange}
                    value = {currentFeedback.body}
                    />
                </label>
            </div>
            <div className = "cell small-10 centered">
                <input 
                type="submit" 
                value="Add Feedback" 
                className = "button"
                />       
            </div>
        </form>
    )
}

export default NewFeedbackForm