export default function Namereducer(state=null,action){
    console.log("Namereducer is called.. action recived is",action)
    switch(action.type){
        case 'Recivedname':
            return action.payload;
        default:
            return state;
    }
}