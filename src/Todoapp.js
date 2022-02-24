import React, { useState, useEffect } from "react";
import axios from "axios";
const Todo = () => {
    let [TodoData, setTodoData] = useState([])
    useEffect(() => {
        axios.get("https://gorest.co.in/public/v2/todos")
            .then(
                response => setTodoData(response.data)
            )
    }, [])
    return (
        <div className="priceTodo">
            <div >
                <h1 >Todo App</h1>
            </div>

            <table>
                <tr className="TableHead">
                    <th>ID</th>
                    <th>USER ID</th>
                    <th>TITLE</th>
                    <th>DUE</th>
                    <th>STATUS</th>
                </tr>
                {
                    TodoData.map(val => {
                        return (
                            <tr>
                                <td> {val.id} </td>
                                <td> {val.user_id} </td>
                                <td> {val.title} </td>
                                <td> {val.due_on} </td>
                                <td> {val.status} </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}
export default Todo