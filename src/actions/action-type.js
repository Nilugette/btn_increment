import {
    INCREMENT_A, 
    INCREMENT_B, 
    SUPER_INCREMENT
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