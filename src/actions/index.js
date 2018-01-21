import axios from 'axios';

export const REGISTER_USER = 'register_user';
export const DETECT_USER = 'detect_user';
export const START_LOADER = 'start_loader';
export const START_LOADER_REG = 'start_loader_reg';
export const CLEAR_DATA = 'clear_data';
export const FETCH_GALLERY = 'fetch_gallery';

const APP_ID = 99114547;
const APP_KEY = '17752e54e0f18f026cf81f74d00f3616';

// function to send image for detection
export function detectImage(image) {

    let request = axios.post(`https://api.kairos.com/recognize`, {
        image: image,
        gallery_name: 'totalo',
    }, {
            headers: {
                app_id: APP_ID,
                app_key: APP_KEY
            }
        });

    return {
        type: DETECT_USER,
        payload: request
    }
}

// function to register user
export function registerUser(image, id) {

    let request = axios.post(`https://api.kairos.com/enroll`, {
        image: image,
        subject_id: id,
        gallery_name: 'totalo',
    }, {
            headers: {
                app_id: APP_ID,
                app_key: APP_KEY
            }
        });

    return {
        type: REGISTER_USER,
        payload: request
    }
}

// function to call a loader for capture
export function initiateCaptureLoader() {
    return {
        type: START_LOADER,
        payload: {}
    }
}

// function to call a loader for register
export function initiateRegisterLoader() {
    return {
        type: START_LOADER_REG,
        payload: {}
    }
}

// function to fetch the gallery listings
export function fetchGalleryData() {

    let request = axios.post(`https://api.kairos.com/gallery/view`, {
        gallery_name: 'totalo',
    }, {
            headers: {
                app_id: APP_ID,
                app_key: APP_KEY
            }
        });

    return {
        type: FETCH_GALLERY,
        payload: request
    }
}

// function to clear data
export function clearData() {
    return {
        type: CLEAR_DATA,
        payload: {
            fetching: false
        }
    }
}