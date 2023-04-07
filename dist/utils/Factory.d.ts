import React from 'react';
import { T_Factory } from './lazy';
declare class Factory {
    factory: T_Factory;
    isFetched: boolean;
    Component: React.FC<any>;
    path: string;
    constructor(factory: T_Factory, path?: string);
    fetch: () => Promise<void>;
}
export { Factory };
