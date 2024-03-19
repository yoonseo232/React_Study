import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))


const Counter = function(props) {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => {setCount(count+1)}}>증가</button>
            <button onClick={() => {setCount(count-1)}}>감소</button>
        </div>
    )
}

root.render(<Counter />)