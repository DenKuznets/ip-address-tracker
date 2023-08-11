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
    ip: "loading",
    country: "loading",
    region: "loading",
    timezone: "loading",
    isp: "loading",
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
    setGeoData: (newGeoData) => set({ geoData: newGeoData }),
    setInput: (newInput) => set({ input: newInput }),
    setLoading: (bool) => set({ loading: bool }),
    setError: (code) => set({ error: code }),
}));