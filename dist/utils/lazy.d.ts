import React from 'react';
declare type T_Factory = (() => Promise<{
    default: React.FC<any>;
}>) & {
    isPreloaded?: boolean;
    Component?: React.FC<any>;
};
declare const lazy: (factory: T_Factory) => React.FC<any> | React.LazyExoticComponent<React.FC<any>>;
export { lazy };
export type { T_Factory };
