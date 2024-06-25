import { create } from "zustand"

export const useCounterStore = create((set) => ({
    // 상태값 정의
    count: 0,
    // 상태 변경 함수 정의
    increment: () => {
        set(state => ({ ...state, count: state.count + 1 }))
    },
    decrement: () => {
        set(state => ({ ...state, count: state.count - 1 }))
    },
    add: (value) => {
        set(state => ({ ...state, count: state.count + value }))
    },
    set: (value) => {
        set({ count: value })
    }
}))
