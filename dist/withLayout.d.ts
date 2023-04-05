import React from 'react';
declare type T_LayoutOptions = {
    header?: 'index' | 'none' | string;
    content?: 'index' | 'none' | string;
    footer?: 'index' | 'none' | string;
};
declare const withLayout: (Comment: React.FC<any>, options?: T_LayoutOptions | undefined) => () => JSX.Element;
export { withLayout };
export type { T_LayoutOptions };
