import React from 'react';
import { T_Factory } from './lazy';
declare class Factory {
    #private;
    factory: T_Factory;
    isFetched: boolean;
    Component: React.FC<any>;
    error: string;
    constructor(factory: T_Factory);
    fetch: () => Promise<void>;
    private get _factory();
}
export { Factory };
