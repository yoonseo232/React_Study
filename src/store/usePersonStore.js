import { create } from "zustand"

const usePersonStore = create((set) => ({
    firstName :'',
    lastName :'',
    updateFirstName: (value) => {
        set(({firstName: value}))
    },
    updateLastName: (value) => {
        set(({lastName: value}))
    }
}));

export default usePersonStore