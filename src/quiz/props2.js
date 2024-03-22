import ReactDOM from 'react-dom'
const root = ReactDOM.createRoot(document.getElementById("root"))

const SlotMachine = function({s1, s2, s3}){
    let success = false
    if(s1 === s2 && s2 === s3){
        success = true;
    }
    let highlight = false
    if(s1 === "7") highlight = true;

    return (
        <div>
              <div>{s1} {s2} {s3}</div>
        {success && <p style={highlight ? {color: "red"} : null}>Congrats!</p>}
        </div>
    )
}

root.render(<div>
    <SlotMachine s1="X" s2="Y" s3="Z" />
    <SlotMachine s1="X" s2="X" s3="X" />
    <SlotMachine s1="7" s2="7" s3="7" />
    <SlotMachine s1="🍓" s2="🍒" s3="🍍" />
    <SlotMachine s1="🍒" s2="🍒" s3="🍒" />
</div>)
