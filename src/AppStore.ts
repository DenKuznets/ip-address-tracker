import { create } from "zustand";
// import { mockData } from "../utils";
import { combine } from "zustand/middleware";

interface GeoDataType {
    ip: string;
    country: string;
    region: string;
    timezone: string;
    isp: string;
    lat: number;
    lng: number;
}

export const useAppStore = create(
    combine(
        {
            geoData: null,
            input: "",
            loading: true,
        },
        (set) => ({
            setIpDomainGeoData: (newGeoData: GeoDataType) =>
                set((state) => ({ ...state, geoData: newGeoData })),
            setInput: (newInput: string) =>
                set((state) => ({ ...state, input: newInput })),
            setLoading: (bool: boolean) =>
                set((state) => ({ ...state, loading: bool })),
        })
    )
);
