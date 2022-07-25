import data from '../MusicProducts.json'

export default function Nameaction(myname){
        console.log("Nameaction action called..generated action product",data.products)
        return{
            type:'Recivedname',
            payload:myname
        }
}