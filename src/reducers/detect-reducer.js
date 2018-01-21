import { DETECT_USER, START_LOADER, CLEAR_DATA } from '../actions';

var initialState = {
    fetching: false,
    datatype: 'none'
};

var status;
var returnObj = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case DETECT_USER:
            if (action.payload.data) {
                status = false;
            }

            returnObj = {};

            returnObj.data = action.payload.data;
            returnObj.fetching = status;
            returnObj.datatype = 'detect';

            return returnObj;
        case START_LOADER:
            return { ...state, fetching: true }
        case CLEAR_DATA:
            return action.payload;
        default:
            return state;
    }
}