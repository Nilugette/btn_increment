import {
    INCREMENT_A, 
    INCREMENT_B,
    SUPER_INCREMENT,
    ASYNC_INCREMENT_C
} from '../constants/constants';

export const incrementA = () => {
    return {
        type: INCREMENT_A
    }
};

export const incrementB = () => {
    return {
        type: INCREMENT_B
    }
};

export const incrementSuperCounter = () => {
    return {
        type: SUPER_INCREMENT
    }
};

let timer = null;

export const asyncIncrementC = () => {

    // par défaut génére une erreur avec le reducer est synchrone
    // Actions must be plain objects
    return dispatch => {
        timer = setInterval(
            () => {
                dispatch(
                    {
                        type: ASYNC_INCREMENT_C
                    }
                )
            }
            , 1000)
    }
};