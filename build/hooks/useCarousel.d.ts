declare function useCarousel(): {
    position: number;
    moveForward: (cardIsVisible: boolean) => void;
    moveBack: () => void;
};
export default useCarousel;
