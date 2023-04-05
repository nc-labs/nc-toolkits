declare const watcher: {
    useWatcher: <T>(name: string, listener: (data: T) => void) => void;
    emitWatcher: <T_1>(name: string, data: T_1) => boolean;
};
export { watcher };
