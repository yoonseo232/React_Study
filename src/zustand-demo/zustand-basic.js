import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import useCounterStore from '../store/useCounterStore'
const root = ReactDOM.createRoot(document.getElementById("root"))

function Counter() {
    const increment = useCounterStore((state) => state.increment)
    const decrement = useCounterStore((state) => state.decrement)
    const set = useCounterStore((state) => state.set)
    const add = useCounterStore((state) => state.add)
    const incrementAsync = useCounterStore((state) => state.incrementAsync)

    return <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={() => set(5)}>set to 5</button>
        <button onClick={() => add(10)}>add 10</button>
        <button onClick={() => add(10)}>add 10</button>
        <button onClick={incrementAsync}>incrementAsync</button>
    </div>
}

function ZustandApp(props) {
    const count = useCounterStore((state) => state.count)

    return <div>
        <h1>ZustandApp</h1>
        <p>{count}</p> 
        <Counter />
    </div>
}

root.render(<ZustandApp />)
