import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

function TodoList({todos, handleTodoRemove, hadleTodoStatusToggle}){
    return <div>
            <ul>{
                todos.map((todo, index) => {
                    //li -> TodoItem으로 
                    return <TodoItem index={index} todo={todo} handleTodoRemove={handleTodoRemove} hadleTodoStatusToggle={hadleTodoStatusToggle}/>
                })
            }
            </ul>    
        </div>
}

function TodoItem({todo, index, handleTodoRemove, hadleTodoStatusToggle}){
    //삭제 버튼 추가 -> [X]
    return <li>
        <span onClick={() => hadleTodoStatusToggle(index)} style={todo.completed ? {textDecoration : "line-through"} : null}>{todo.text}</span>
        <button onClick={() => handleTodoRemove(index)}>X</button>
    </li>
}

function TodoAbber({handleTodoAdd}){
    const [input, setInput] = useState("")
    const handleChange = (e) => setInput(e.target.value)
    
    return <div>
        <input type="text" onChange={handleChange} value={input} placeholder="할 일 입력"/>
        {/*글 쓰면 input 텍스트 초기화(빈문자열)*/}
        <button onClick={() => {
            handleTodoAdd({completed: false, text: input})
            setInput("")
            }}>추가</button>
    </div>
}
function TodoApp(props){
    //상태 => 배열 => 배열 안에는 할일 관련 내용이 포함된 객체가 저장됨
    const [todos, setTodos] = useState([
        {completed: false, text: "리액트 공부하기"},
        {completed: true, text: "자바스크립트 공부하기"}
    ])

    //handleTodoAdd 함수 정의, 그 함수에서는 전달받은 todo 객체를 todos에 추가하는 역할을 함(내부적으로 setTodos를 호출, concat)
    const handleTodoAdd = todo => setTodos(todos.concat(todo)) 
    // handleTodoRemove 함수를 만들어서 지우고 싶은 위치(index) 값을 전달 받아서 해당 할 일을 삭제
    // filter, filter(item, idx) => 
    const handleTodoRemove = index => setTodos(
        todos => todos.filter((_, todoIndex) => index !== todoIndex)
    )
    
    //handleTodoStatusToggle 함수를 작성하고, 함수에서는 index 정보를 받아서 해당 index의 todo의 completed 상태를 반전(map 함수 사용)
    const hadleTodoStatusToggle = index => setTodos(
        todos => todos.map((todo, todoIndex) => {
            //index와 todoIndex 비교해서 같으면 completed 상태를 반전
            if(index === todoIndex){
                return {...todo, completed: !todo.completed}
            }
            return todo;
        })
    )

    return <div>
        <TodoList todos={todos} handleTodoRemove={handleTodoRemove} hadleTodoStatusToggle={hadleTodoStatusToggle}/>
        {/*handleTodoAdd라는 props 값으로 TodoAdder에 전달하기*/}
        <TodoAbber handleTodoAdd={handleTodoAdd}/>
    </div>

    
    
}

root.render(<TodoApp/>)