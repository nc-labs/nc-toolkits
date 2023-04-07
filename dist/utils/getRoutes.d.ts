import { Factory } from './Factory';
declare const getRoutes: () => {
    routes: Pick<{
        path: string;
        factory: Factory;
        element: JSX.Element;
    }, "path" | "element">[];
    routePreloads: Pick<{
        path: string;
        factory: Factory;
        element: JSX.Element;
    }, "path" | "factory">[];
};
export { getRoutes };
