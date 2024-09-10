type Procedure = (...args: any[]) => void;
declare const debounce: (func: Procedure, delay: number) => Procedure;
export default debounce;
