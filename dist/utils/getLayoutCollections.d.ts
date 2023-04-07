import { Factory } from './Factory';
declare const getLayoutCollections: (component: 'headers' | 'footers' | 'contents') => Record<string, Factory>;
export { getLayoutCollections };
