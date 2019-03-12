import * as constants from './constants'
import {fromJS} from 'immutable';
// immutable.js

const defaultState = fromJS({
    focused: false,
    lits: []
});

export default (state = defaultState, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        // immutable对象的set方法会结合之前immutable对象的值设置值，和设置的值返回一个新的对象
        return state.set('focused', true)
        }
    if (action.type === constants.SEARCH_BLUR) {
        return state.set('focused',false)
    }
    if (action.type === constants.CHANGE_LIST) {
        return state.set('list', action.data);
    }
    return state;
}