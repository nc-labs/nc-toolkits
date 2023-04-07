import { Factory } from './Factory';
declare const getLayoutComponet: (component: 'headers' | 'footers' | 'contents') => Record<string, Factory>;
export { getLayoutComponet };
