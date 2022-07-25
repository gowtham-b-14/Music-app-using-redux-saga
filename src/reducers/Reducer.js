export default function Reducer(state=[],action){
    console.log("Reducer is called.. action recived is",action)
    switch(action.type){
        case 'Recived':
            return action.payload;
        default:
            return state;
    }
}
