import { create } from "zustand"
import { produce } from "immer"

const useCounterStore = create((set) => ({
    // 상태값 정의
    count: 0,
    // 상태 변경 함수 정의
    increment: () => {
        // set(state => ({ ...state, count: state.count + 1 }))
        set(state => produce(state, draft => {
            draft.count++
            return draft
        }))
    },
    decrement: () => {
        set(state => ({ ...state, count: state.count - 1 }))
    },
    add: (value) => {
        set(state => ({ ...state, count: state.count + value }))
    },
    set: (value) => {
        set({ count: value })
    },
    // async 함수 추가
    incrementAsync: async () => {
        // sleep 함수 흉내내기
        await new Promise((resolve) => setTimeout(resolve, 1000))
        // 상태 변경
        set(state => ({ ...state, count: state.count + 1 }))
    },
}))


export default useCounterStore