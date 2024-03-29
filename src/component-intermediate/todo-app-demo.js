import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))


function TodoApp(props){
    //상태 => 배열 => 배열 안에는 할일 관련 내용이 포함된 객체가 저장됨
    const [todos, setTodos] = useState([
        {completed: false, text: "리액트 공부하기"},
        {completed: true, text: "자바스크립트 공부하기"}
    ])
    

    return(todos.map(item => {
        return <div>
            <ul>
                <li>{item.text}</li>
            </ul>    
        </div>
    }))
    
}

root.render(<TodoApp/>)