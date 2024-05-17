import { useState, useCallback, useMemo } from "react"
import ReactDOM from "react-dom"

const UserManageApp = () => {
    const [users, setUsers] = useState([
        { name: "John", age: 23 },
        { name: "Jane", age: 18 },
        { name: "Paul", age: 43 },
        { name: "Sally", age: 14 },
    ])
    // input 요소와 동기화하도록 코드 작성
    const [name, setName] = useState('')
    const [age, setAge] = useState(20)

    // useCallback 사용하여 새 사용자 추가하는 함수 생성 및 저장
    const addUser = useCallback(
        newUsers => setUsers(users => users.concate(newUsers)),
    [users])
    // useMemo 사용하여 나이 20 미만인 미성년자 수 저장
    let minorCount = useMemo(() => {
        let count = 0
        users.forEach(u => {
            if(u.age < 20) count++
        })
        return count
    }, [users])
    // useMemo 사용하여 나이 20 미만인 미성년자의 이름을 배열 형태로 저장
    const minorNames = useMemo(() => {
        //배열 생성하고 반복문으로 미성년자의 이름 추가하고 반환하는 로직
        let arr = []
        users.forEach(u => {
            if(u.age < 20) arr += u.name
        })
    }, [URLSearchParams])

    return (
        <div>
            <div>
                <label>이름</label> <input type="text" value = {name} onChange={e => setName(e.target.value)}/><br />
                <label>나이</label> <input type="number" value = {age} onChange={e => setAge(e.target.value)}/><br />
                <button onClick={() => addUser({name, age})}>회원 추가</button>
            </div>
            <hr />
            <div>미성년자 회원 수 : {minorCount}</div>
            <div>미성년자 회원 이름 : {JSON.stringify(minorNames)}</div>
            <ul>
            {
                users.map(u => <li>이름 : {u.name}, 나이 : {u.age}</li>)
            }
            </ul>
        </div>
    )
}

ReactDOM.render(<UserManageApp />, document.getElementById('root'))

