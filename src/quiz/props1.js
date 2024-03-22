import ReactDOM from 'react-dom'
const root = ReactDOM.createRoot(document.getElementById("root"))

    const Calculator = function({num1, num2, op}) {
        let result = null;
        if(op === "+"){
            result = num1 + num2;
        }else{
            result = num1 - num2;
        }

        return (
        <div>{num1} {op} {num2} = {result}</div>
        )
    }

    root.render(<div>
        <Calculator num1={1} num2={2} op="+" />
        <Calculator num1={1} num2={2} op="-" />
    </div>)
