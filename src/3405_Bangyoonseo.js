import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))


//문제 1
function Greeting({ prefix, target }){
    return <div>{prefix} {target}</div>
}

//문제2
function Reverse({ str }){
    str = str.split("").reverse().join("");
    return <div>{str}</div>
}

//문제3
function Gugudan({ from, to }){

}


//문제4
function LimitedPusher({ limit }){
    const [count, setCont] = useState(0);

    return (<div>
        {count !== limit ? <div>{count}/10번 클릭하였습니다.</div> : <div>모두 클릭하였습니다.</div>}
        <button onClick={() => setCont(count => count + 1)}>[클릭]</button>
    </div>)
}


//문제5
function LikeDislikeButton(){
    const [like, setLike] = useState(0);
    const [hate, setHate] = useState(0);

    return(<div>
        <div>좋아요 : {like}, 싫어요 : {hate}</div>
        
        <button onClick={() => setLike(like => like+1)} style={like > hate ? {backgroundColor : 'green'} : null}>좋아요</button>
        <button onClick={() => setHate(hate => hate+1)} style={like < hate ? {backgroundColor : 'red'} : null}>싫어요</button>
        <button onClick={() => {
            setLike(like => like=0)
            setHate(hate => hate=0)
            }}>초기화</button>
    </div>)
}

//문제6
function RandomColorPicker(){
    let randomColor = "#";
    for(let i = 0; i < 6; i++){
        randomColor.push(randomHex());
    }
    return <div style={{}}></div>
}

function randomHex() {
    return (Math.floor(Math.random() * (15 - 1 + 1) + 1)).toString(16);
}

root.render(<div>
    {/*문제1*/}
    <Greeting prefix="Hello" target="Yu Byung Suk" />
    {/*문제2*/}
    <Reverse str="Hello" />
    {/*문제3*/}
    <Gugudan from={3} to={5} />
    {/*문제4*/}
    <LimitedPusher limit={10} />
    {/*문제5*/}
    <LikeDislikeButton />
    {/*문제6*/}
    {/* <RandomColorPicker /> */}
</div>)