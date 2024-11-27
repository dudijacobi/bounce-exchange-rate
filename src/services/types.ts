export interface ExchangeRate {
    disclaimer: string;
    license: string;
    timestamp: number;
    base: BaseType;
    rates: {
        [key: string]: number;
    };
}

export enum BaseType { 
    USD =  "USD",
    ILS = "ILS"
}