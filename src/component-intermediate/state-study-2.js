const MultipleStateComponent = function(props) {
    // useState 함수를 원하는 만큼 호출하여 여러 상태값을 관리할 수 있음
    const [count, setCount] = useState(0)
    const [text, setText] = useState("a")

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>증가</button>
            <h1>{text}</h1>
            <button onClick={() => setText(text + "a")}>a 추가</button>
        </div>
    )
}