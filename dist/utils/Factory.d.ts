import React from 'react';
declare type T_FactoryReturn = () => Promise<{
    default: React.FC<any> & {
        factories?: Factory[];
    };
}>;
declare class Factory {
    factory: T_FactoryReturn;
    isFetched: boolean;
    Component: React.FC<any>;
    error: string;
    constructor(factory: T_FactoryReturn);
    fetch: () => Promise<void>;
}
export { Factory };
export type { T_FactoryReturn };
