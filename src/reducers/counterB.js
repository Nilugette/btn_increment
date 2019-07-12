import { INCREMENT_B } from '../constants/constants';

// source de véritié unique
const stateInit = {
    count: 0,
    step: 2,
    sens: 1
}

// c'est dans cette partie que le "state" est modifié sans faire muter le stateInit
export default (state = stateInit, action = {}) => {

    let newCount;

    switch (action.type) {

        case INCREMENT_B:
            let sens = state.sens;

            if (state.count === 0) sens = 1;
            if (state.count === 20) sens = -1;

            newCount = { count: state.count + sens * state.step, sens: sens }

            // la source de véritié qui est utilisé pour retourner
            // un store modifié en copie
            return { ...state, ...newCount }

        default:
            return state
    }
}