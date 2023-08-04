import { create } from "zustand";
import { mockData } from "../utils";
import { combine } from "zustand/middleware";

interface DataType {
    ip: string;
    country: string;
    region: string;
    timezone: string;
    isp: string;
}

export const useAppStore = create(
    combine(
        {
            data: mockData,
            input: "",
            loading: true,
        },
        (set) => ({
            setData: (dataObj: DataType) =>
                set((state) => ({ ...state, data: dataObj })),
            setInput: (newInput: string) =>
                set((state) => ({ ...state, input: newInput })),
            setLoading: (bool: boolean) =>
                set((state) => ({ ...state, loading: bool })),
        })
    )
);
