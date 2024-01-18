import { create } from "zustand";




export const stockStore = create((set) => ({

    portfolio: [],
    changePortfolio: (data: any) => set((state: any) => ({
        ...state,
        portfolio: data.portfolios
    }))

}))