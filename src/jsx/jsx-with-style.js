import ReactDOM from 'react-dom'
const root = ReactDOM.createRoot(document.getElementById("root"))

function MyHeader() {
    // 스타일 관련 정보를 담은 객체 생성
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    };
    return (
        <div>
            {/* 앞서 생성한 mystyle 객체를 전달 */}
            <h1 style={mystyle}>Let's add some style!</h1>
        </div>
    );
}

root.render(<MyHeader />)


//<h1 style={{color: "red"}}>Hello Style!</h1>  첫번째 {} = js코드 , 두번째 {} = 객체