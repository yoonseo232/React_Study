import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import usePersonStore from '../store/usePersonStore'
const root = ReactDOM.createRoot(document.getElementById("root"))

function App(){
    const firstName = usePersonStore(state => state.firstName)
    const lastName = usePersonStore(state => state.lastName)
    const updateFirstName = usePersonStore(state => state.updateFirstName)
    const updateLastName = usePersonStore(state => state.updateLastName)
    const [firstNameInput, setfirstNameInput] = useState('')
    const [lastNameInput, setlastNameInput] = useState('')
    return <div>
        <h1>이름 : {firstName} 성 : {lastName}</h1>
        이름 : <input type="text" value={firstNameInput} onChange={e => setfirstNameInput(e.target.value)}/><br/>
        성 : <input type="text" value={lastNameInput} onChange={e => setlastNameInput(e.target.value)}/><br/>
        <button onClick={() => {
            updateFirstName(firstNameInput)
            updateLastName(lastNameInput)
        }}>입력</button>
    </div>  
}

root.render(<App/>)