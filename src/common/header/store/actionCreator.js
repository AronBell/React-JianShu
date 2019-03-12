import * as contants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios'
import { constants } from '.';

export const searchFocus = () => ({
    // 常量
    type: contants.SEARCH_FOCUS
});

export const searchBlur = () =>({
    type:contants.SEARCH_BLUR
 })

 const changeList = (data) => ({
     type: constants.CHANGE_LIST,
     data: fromJS(data)
 })

//  redux-thunk,直接返回对象
 export const getList = () => {
     return(dispatch) => {
       axios.get('/api/headerList.json')
            .then((res) => {
                const data = res.data;
                dispatch(changeList(data.data));
            })
            .catch(() => {
                console.log('error')
            })

     }
 }