import { create } from 'zustand'

export const useAccountsData = create((set) => ({
    allAccountsData: [],
    setAllAccountsData: (obj) => set((state) => ({ objects: [...state.objects, obj] })),
}))

// Slice for array of numbers
export const useSelectedRow = create((set) => ({
    selectedRow: [],
    setSelectedRow: (num) => set((state) => ({ numbers: [...state.numbers, num] })),
}))
