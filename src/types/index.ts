import {ICurrencies} from './currencies';
import {IName, IIdd, IMaps, ICar, IDemonyms} from './others';
import {ILanguages} from './languages';
import {ITranslations} from './translations';
import {IGini} from './gini';

export type ICountries = {
    countries: ICountry[];
    selectedValue: string;
    showStars:boolean;
}

export interface Country {
    country: ICountry;
    showStars: boolean;
}
export interface ICountry {
    name: IName;
    tld?: string[];
    cca2: string;
    ccn3?: string;
    cca3: string;
    independent?: boolean;
    status: string;
    unMember: boolean;
    currencies?: ICurrencies;
    idd: IIdd;
    capital?: string[];
    altSpellings: string[];
    region: string;
    subregion?: string;
    languages?: ILanguages;
    translations: ITranslations;
    latlng: number[];
    landlocked: boolean;
    area: number;
    demonyms?: IDemonyms;
    flag?: string;
    maps: IMaps;
    population: number;
    car: ICar;
    timezones: string[];
    continents: string[];
    flags: string[];
    cioc?: string;
    gini?: IGini;
    fifa?: string;
    borders?: string[];
}

export interface IModal {
    isOpen: boolean;
    toggle: () => void;
    country: ICountry;
}