import ReactDOM from 'react-dom'
const root = ReactDOM.createRoot(document.getElementById("root"))

// AND 연산자를 이용한 조건부 렌더링
function conditionalRenderUsingAND() {
    let unreadMessages = ["Hello", "React"];

    return (
        <div>
            <h1>Hello!</h1>
                {/* 만약 읽지 않은 메시지가 있다면 경고문 출력 */}
                {unreadMessages.length > 0 &&
                <h2>You have {unreadMessages.length} unread messages.</h2>
            }
        </div>
    )
}

// if, else 구문을 이용한 조건부 렌더링
function conditionalRender(age) {
    if(age >= 20) {
        return <div>성인</div>
    } else {
        return <div>미성년자</div>
    }
}

// JSX 내부에서는 if, else 구문 사용이 불가능하므로 삼항 연산자를 사용하여 조건부 렌더링을 수행
const age = 20
const conditionalElement = (
    <>{age >= 20 ? <div>성인</div> : <div>미성년자</div>}</>
)

const lst = ['Hello', 'React', 'JSX']
// 반복문
const ul = (
    <ul>
        {
            lst.map(item => {
                return <li>{item}</li>
            })
        }
    </ul>
)

function JsxBasic2() {
    return (
        <div>
            {ul}
            {conditionalRenderUsingAND()}
            {conditionalRender(20)}
            {conditionalRender(19)}
            {conditionalElement}
        </div>
    )
}

root.render(<JsxBasic2 />)