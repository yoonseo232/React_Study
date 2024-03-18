import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

const Child = props => <div>{props.children}</div>

root.render(<div>
    <Child>Hello</Child>
    <Child>
        <h1>Title</h1>
        <div>React</div>
        <ol>
            <li>item 1</li>
            <li>item 2</li>
        </ol>
        <Child>Inner Child</Child>
    </Child>
</div>)