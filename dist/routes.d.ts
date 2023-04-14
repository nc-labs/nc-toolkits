import { Factory } from './utils/Factory';
declare const routes: Pick<{
    path: string;
    factory: Factory;
    element: JSX.Element;
}, "path" | "element">[], routePreloads: Pick<{
    path: string;
    factory: Factory;
    element: JSX.Element;
}, "path" | "factory">[];
export { routePreloads, routes };
