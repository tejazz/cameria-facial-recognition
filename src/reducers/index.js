import { combineReducers } from 'redux';

// calling the individual reducers
import detectReducer from './detect-reducer';
import galleryReducer from './gallery-reducer';
import registerReducer from './register-reducer';

const rootReducers = combineReducers({
    // add reducer files references here
    userData: detectReducer,
    galleryData: galleryReducer,
    regData: registerReducer
});

export default rootReducers;