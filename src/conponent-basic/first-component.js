import ReactDOM from 'react-dom'
const root = ReactDOM.createRoot(document.getElementById("root"))


function FirstComponent(){
    return <div>First Component</div>
}

function HelloWorld(){
    return <div>Hello, World!</div>
}

root.render(<div>
    <FirstComponent />
    <HelloWorld />
</div>)