import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

const ComponentWithProps = function(props) {
    console.log(props)
    return <p>{JSON.stringify(props)}</p>
}

const Greeting = function(props) {
  return  <p>Hello, {props.name}</p>
}

root.render(<div>
    <ComponentWithProps value="Hello" />
    <ComponentWithProps value={1} />
    <ComponentWithProps value={{ a: 1, b: "React" }} />
    <ComponentWithProps value={() => { }} />
    <Greeting name="윤서"/>
</div>)