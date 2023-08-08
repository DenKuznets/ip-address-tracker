import { create } from "zustand";

export interface GeoDataType {
    ip: string;
    country: string;
    region: string;
    timezone: string;
    isp: string;
    lat: number;
    lng: number;
}

const initialGeoData = {
    ip: "1.1.1.1",
    country: "Russia",
    region: "Moscow",
    timezone: "+03:00",
    isp: "none",
    lat: 55.751244,
    lng: 37.618423,
};

interface AppState {
    geoData: GeoDataType;
    input: string;
    loading: boolean;
    error: string;
    setGeoData: (newGeoData: GeoDataType) => void;
    setInput: (newInput: string) => void;
    setLoading: (bool: boolean) => void;
    setError: (code: string | undefined) => void;
}

export const useAppStore = create<AppState>()((set) => ({
    geoData: initialGeoData,
    input: "",
    loading: true,
    error: "",
    setGeoData: (newGeoData) =>
        set((state) => ({ ...state, geoData: newGeoData })),
    setInput: (newInput) => set((state) => ({ ...state, input: newInput })),
    setLoading: (bool) => set((state) => ({ ...state, loading: bool })),
    setError: (code) => set((state) => ({ ...state, error: code })),
}));
