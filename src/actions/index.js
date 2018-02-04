export const REGISTER_USER = 'register_user';
export const RECOGNIZE_USER = 'recognize_user';
export const CLEAR_DISPLAY = 'clear_display';

// function to register user
export function registerUser(data) {

    return {
        type: REGISTER_USER,
        payload: data
    };
}

// function to recognize user
export function recognizeUser(data) {

    return {
        type: RECOGNIZE_USER,
        payload: data
    };
}

// resetting the display messages
export function clearDisplayData() {

    return {
        type: CLEAR_DISPLAY,
        payload: {}
    };
}