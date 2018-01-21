import { FETCH_GALLERY } from '../actions';

let initialState = {};

export default (state = initialState, action) => {
    console.log(action.payload);
    switch (action.type) {
        case FETCH_GALLERY:
            let faces = [];
            // check for errors happening during fetching phase
            if (action.payload.data.Errors) {
                faces = [];
            } else {
                faces = action.payload.data.subject_ids;
            }
            return { ...state, gallery: faces };
        default:
            return state;
    }
}