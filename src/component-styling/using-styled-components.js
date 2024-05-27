import React from 'react'
import ReactDOM from 'react-dom'
import styled, { css } from 'styled-components'

// styled.태그이름` ... 스타일내용 ... `
const ButtonWithoutStyle = styled.button``
const ButtonWithStyle = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 1px solid black;
    color: red;
    font-size: 24px;
`
const Anchor = styled.a`
    text-decoration: none;
    &:hover {
        background: yellow;
    }
`
const MyDiv = styled.div`
    width: 500px;
    height: 100%;
    margin: 0 auto;
    border: 1px solid red;
`
// props 속성값에 접근해야 할 경우 다음과 같이 콜백 함수를 전달
const MyParagraph = styled.p`
    color: ${ props => props.color ?? 'black' };
    ${props => props.highlight && css`
        background: yellow;
        border: 1px solid red;            
    `}
`

const App = function(props) {
    return (
        <MyDiv>
            <ButtonWithoutStyle>without style</ButtonWithoutStyle><br />
            <ButtonWithStyle>with style</ButtonWithStyle><br />
            <Anchor href="https://www.google.com">styled anchor</Anchor>
            <MyParagraph color="red" highlight>paragraph</MyParagraph>
        </MyDiv>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))