declare const useIntersectionObserver: (callback: () => void, margin?: string) => {
    observerRef: import("react").MutableRefObject<null>;
    parentRef: import("react").RefObject<HTMLDivElement>;
};
export default useIntersectionObserver;
