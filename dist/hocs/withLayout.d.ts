import React from 'react';
declare type T_LayoutOptions = {
    header?: string;
    content?: string;
    footer?: string;
};
declare const withLayout: (Comment: React.FC<any>, options?: T_LayoutOptions | undefined) => () => JSX.Element;
export { withLayout };
export type { T_LayoutOptions };
