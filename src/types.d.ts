export type Callback = () => void;

export type Events = { [key: string]: Callback[] };
