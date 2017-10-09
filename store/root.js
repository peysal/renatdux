import {createStore} from 'redux'

export const rootState = (state, action) => {
    switch (action.type) {
        case 'action1': 
            return 'yo action1';
        case 'action2':
            return 'yes action2';
        default:
            return state;
    }
}

let rootStore = createStore(rootState);

export default rootStore;