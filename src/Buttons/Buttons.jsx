import React from 'react'
import { useNavigate } from 'react-router-dom'

const Buttons = () => {
    const navigate = useNavigate()
    const btnClicked = () => {
        navigate("/create-post")
    }
    
    return (
        <div className="buttons-container">
            <h1>Start Creating Posts</h1>
            <button className="btn-create" onClick={btnClicked}>
                Create Now
            </button>
        </div>
    )
}

export default Buttons
