import {INativeNames} from '../nativeNames';

export interface IName {
    common: string
    official: string
    nativeName?: INativeNames
}

export interface IDemonym {
    f: string;
    m: string;
}

export interface IDemonyms {
    eng?: IDemonym;
    fra?: IDemonym;
}

export interface IMaps {
    googleMaps: string;
    openStreetMaps: string;
}

export interface ICar {
    signs?: string[];
    side: string;
}

export interface IIdd {
    root?: string;
    suffixes?: string[];
}