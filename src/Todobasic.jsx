import React from 'react'
import Todoheader from './component/Todoheader'
import AddTodo from './component/AddTodo'
import TodoItemList from './component/TodoItemList'



const Todobasic = () => {
    return (
        <>
            <div className="container">
                <Todoheader />
                <AddTodo />
                <TodoItemList />
                <TodoItemList />
            </div>
        </>
    )
}

export default Todobasic