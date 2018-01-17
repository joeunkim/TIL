export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const SET_DIFF = 'SET_DIFF';
export const HANDLE_OPEN = 'HANDLE_OPEN';
export const HANDLE_CLOSE = 'HANDLE_CLOSE';

// arrow function이 export 안되는 이유
export function increment() {
    return {
        type: INCREMENT
    };
}

export function decrement() {
    return {
        type: DECREMENT
    };
}

export function reset() {
    return {
        type: RESET
    };
}

export function setDiff(value) {
    return {
        type: SET_DIFF,
        diff: value
    };
}

export function handleOpen() {
    return {
        type: HANDLE_OPEN
    };
}

export function handleClose() {
    return {
        type: HANDLE_CLOSE
    };
}

export function callAPI() {
    return {
        type: CALL_API
    };
}