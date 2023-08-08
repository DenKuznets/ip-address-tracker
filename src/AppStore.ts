import { create } from "zustand";
// import { mockData } from "../utils";
import { combine } from "zustand/middleware";

interface DataType {
    ip: string;
    country: string;
    region: string;
    timezone: string;
    isp: string;
}

interface LatLngType {
    lat: number;
    lng: number;
}

export const useAppStore = create(
    combine(
        {
            ipDomainGeoData: null,
            input: "",
            loading: true,
            latlng: null,
        },
        (set) => ({
            setIpDomainGeoData: (dataObj: DataType) =>
                set((state) => ({ ...state, ipDomainGeoData: dataObj })),
            setInput: (newInput: string) =>
                set((state) => ({ ...state, input: newInput })),
            setLoading: (bool: boolean) =>
                set((state) => ({ ...state, loading: bool })),
            setLatlng: (newLatlng: LatLngType) =>
                set((state) => ({ ...state, latlng: newLatlng })),
        })
    )
);