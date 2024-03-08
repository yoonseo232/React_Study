import ReactDOM from 'react-dom'
const root = ReactDOM.createRoot(document.getElementById("root"))

const element = <p style={{color: "pink", fontSize: "50px"}}>안녕하세용</p>
const person = {
    name : '유희주',
    age : 19
}

let myNumber = 2
function isEven(num) { 
    return num % 2 === 0 
}

const users = [
    { name: "John", isKorean: false },
    { name: "철수", isKorean: true },
    { name: "영희", isKorean: true },
    { name: "Sally", isKorean: false }
]

const userList = <ul>
   {users.map(item => {
    item.isKorean ? <h1>환영합니다{item.name}</h1> : <h1>Welcom{item.name}</h1>
    })}
</ul>

root.render(<div>
    {userList}
</div>)

root.render(<div>{element}
{person.name}입니다&nbsp;{19}세입니다
{isEven(myNumber) && <h1>짝수는 사용할 수 없습니다.</h1>}
{isEven(myNumber) ? <h1>짝수입니다.</h1> : <h1>홀수입니다.</h1>}
{userList}
</div>)