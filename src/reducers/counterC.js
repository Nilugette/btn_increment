import { ASYNC_INCREMENT_C } from '../constants/constants';

// source de véritié unique
const stateInit = {
    count: 0,
    step : 1
}

// c'est dans cette partie que le "state" est modifié sans faire muter le stateInit
export default (state = stateInit, action = {}) => {

    let newCount;

    switch (action.type) {

        case ASYNC_INCREMENT_C:
            newCount = { count: state.count + state.step }

            return { ...state, ...newCount }

        default:
            return state
    }
}