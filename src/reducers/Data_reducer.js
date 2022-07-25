import { FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from "../action/Data_action";

const IS={
    loading:false,
    error:null,
    items:[]
}

export default function Data_reducer(state=IS,action){

    switch(action.type){
        case FETCH_PRODUCTS_BEGIN:return{
            ...state,loading:true,error:null,type:FETCH_PRODUCTS_BEGIN,
        };
        case FETCH_PRODUCTS_SUCCESS:return{
            ...state,loading:false,items:action.payload,type:FETCH_PRODUCTS_SUCCESS,
        };
        case FETCH_PRODUCTS_FAILURE:return{
            ...state,loading:false,error:action.payload.error,items:[],type:FETCH_PRODUCTS_FAILURE,
        };
        default:return state;
    }
}