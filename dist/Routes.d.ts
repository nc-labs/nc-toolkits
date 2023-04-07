declare const routes: Pick<{
    path: string;
    factory: import("./utils/Factory").Factory;
    element: JSX.Element;
}, "path" | "element">[], routePreloads: Pick<{
    path: string;
    factory: import("./utils/Factory").Factory;
    element: JSX.Element;
}, "path" | "factory">[];
export { routePreloads, routes };
