declare const formatTime: (time?: number | null | undefined) => {
    fullTime: string;
    hour: number;
    minute: number;
};
export default formatTime;
