import React from 'react'

const TodoItemList = () => {
    return (
        <div className="row mb-3">
            <div className="col">
                <p>Cow milk</p>
            </div>
            <div className="col">
                <p>11/11/23</p>
            </div>
            <div className="col">
                <button type="button" className="btn btn-danger sg-button">Delete</button>
            </div>
        </div>
    )
}

export default TodoItemList