/// <reference types="react" />
declare const routes: Pick<{
    path: string;
    preload: import("../utils/lazy").T_Factory;
    component: () => JSX.Element;
}, "path" | "component">[], routePreloads: Pick<{
    path: string;
    preload: import("../utils/lazy").T_Factory;
    component: () => JSX.Element;
}, "path" | "preload">[];
declare const Routes: () => import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, any> | null) | (new (props: any) => import("react").Component<any, any, any>)> | null;
export { Routes, routePreloads, routes };
