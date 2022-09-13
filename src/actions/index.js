export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const MAKE_MEMORY_TOTAL = 'MAKE_MEMORY_TOTAL';


export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) => {
    return({type: CHANGE_OPERATION, payload: operation});
}

export const clearDisplay = () => {
    return({type: CLEAR_DISPLAY, payload: 0});
}

export const makeMemoryTotal = (memory) => {
    return({type: MAKE_MEMORY_TOTAL, payload: memory});
}