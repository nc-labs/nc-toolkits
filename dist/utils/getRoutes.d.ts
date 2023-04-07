import React from 'react';
import { T_Factory } from './lazy';
declare const getRoutes: (lazyFunction?: ((factory: any) => React.LazyExoticComponent<any>) | undefined) => {
    routes: Pick<{
        path: string;
        element: JSX.Element;
        preload: T_Factory;
    }, "path" | "element">[];
    routePreloads: Pick<{
        path: string;
        element: JSX.Element;
        preload: T_Factory;
    }, "path" | "preload">[];
};
export { getRoutes };
