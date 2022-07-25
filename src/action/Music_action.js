import data from '../MusicProducts.json'

export default function Music_action(){
        console.log("Music_action action called..generated action product",data.products)
        return{
            type:'Recived',
            payload:data.products
        }
}