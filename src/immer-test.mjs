import { produce } from "immer"

const baseState = [
    {
        title: "Learn TypeScript",
        done: true
    },
    {
        title: "Try Immer",
        done: false
    }
]

const nextState = produce(baseState, draft => {
    draft[1].done = true
    draft.push({title: "Tweet about it"})
    return draft
})

console.log(baseState) 
console.log(nextState) 
console.log(baseState === nextState) 