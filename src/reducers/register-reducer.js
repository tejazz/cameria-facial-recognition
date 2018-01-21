import { REGISTER_USER, START_LOADER_REG, CLEAR_DATA } from '../actions';

var initialState = {
    fetching: false,
    datatype: 'none'
};

var status;
var returnObj = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            if (action.payload.data) {
                status = false;
            }

            returnObj = {};

            returnObj.data = action.payload.data;
            returnObj.fetching = status;
            returnObj.datatype = 'register';

            return returnObj;
        case START_LOADER_REG:
            return { ...state, fetching: true }
        case CLEAR_DATA:
            return action.payload;
        default:
            return state;
    }
}