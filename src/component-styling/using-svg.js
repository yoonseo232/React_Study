import React from 'react'
import ReactDOM from 'react-dom'
import Logo from './firefox.svg'
// 컴포넌트처럼 사용하기 위해서 import
import { ReactComponent as FirefoxLogo } from './firefox.svg'

const App = function(props) {
    return (
        <div>
            {/* 이미지의 src 속성으로 불러온 값을 전달 */}
            <img src={Logo} style={ { width: "200px" } } /><br />
            {/* 컴포넌트처럼 사용 가능 (내부적으로 컴포넌트 내용을 svg 태그로 교체) */}
            <FirefoxLogo style={ { width: "500px" } } />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))