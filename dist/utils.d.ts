import React from 'react';
declare const getRoutes: (lazyFunction?: ((factory: any) => React.LazyExoticComponent<any>) | undefined) => {
    path: string;
    element: JSX.Element;
}[];
declare const getLayoutComponet: (component: 'headers' | 'footers' | 'contents', lazyFunction?: ((factory: any) => React.LazyExoticComponent<any>) | undefined) => {};
export { getRoutes, getLayoutComponet };
