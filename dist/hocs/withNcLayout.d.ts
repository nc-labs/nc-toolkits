import React, { FC } from 'react';
import { Factory } from '../utils/Factory';
declare const withNcLayout: (Component: FC, options?: {
    header?: string | undefined;
    content?: string | undefined;
    footer?: string | undefined;
} | undefined) => React.FC<{}> & {
    factories?: Factory[] | undefined;
};
export { withNcLayout };
