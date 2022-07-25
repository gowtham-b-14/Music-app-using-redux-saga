import {takeLatest,call,put,all} from 'redux-saga/effects'
import { FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from "../action/Data_action";

function* actionWatcher(){
    yield takeLatest(FETCH_PRODUCTS_BEGIN, Data);
}

function* Data(){
    try
    {
        let api=yield fetch("http://jsonplaceholder.typicode.com/posts")
        .then(api=>{
            if(api.status===404){
                throw new Error("Error Found in API")
            }
            return api.json()
        });
        yield put({type:FETCH_PRODUCTS_SUCCESS,payload:api})
    }catch(error){
        yield put({type:FETCH_PRODUCTS_FAILURE,payload:{error:error}});
    }
}

export default function* rootsaga(){
    yield all([
        actionWatcher(),
    ])
}