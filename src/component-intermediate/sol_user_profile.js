import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

const UserProfile = function(props){
    const [userNamename, setUserName] = useState("유희주")
    const [userAge, setUserAge] = useState(19)
    const [emailAddress, setEmailAddress] = useState("w2230@e-mirim.hs.kr")

    return (
        <div>
            <h1>{userNamename}</h1>
            <h1>{userAge}</h1>
            <h1>{emailAddress}</h1>
        </div>
    )
}