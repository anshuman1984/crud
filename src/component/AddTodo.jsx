import React from 'react'

const AddTodo = () => {
    return (
        <div className="row mb-3">
            <div className="col">
                <input type="text" className="form-control" placeholder="Your Textbox" />
            </div>
            <div className="col">
                <input type="date" className="form-control" />
            </div>
            <div className="col">
                <button type="button" className="btn btn-primary sg-button">Add</button>
            </div>
        </div>
    )
}

export default AddTodo