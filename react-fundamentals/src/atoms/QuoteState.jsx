import { atom,selectorFamily } from "recoil";

export const quoteState=atom({
    key:'quoteState',
    default:null
})

export const fetchQuote=selectorFamily({
    key:'fetchQuote',
    get:({firstName,lastName})=>async({get})=>{
        const quote=await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`).then((res)=>res.json()).then((data)=>data.value.joke)
        return quote
    }
})