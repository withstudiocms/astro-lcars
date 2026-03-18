import { RANDOM_LCARS_LOADING_MESSAGES } from "./consts";

export const selectRandom = <T>(array: T[]): T => {
    return array[Math.floor(Math.random() * array.length)];
};

export const getRandomLCARSLoadingMessage = (): string => {
    return selectRandom(RANDOM_LCARS_LOADING_MESSAGES);
};