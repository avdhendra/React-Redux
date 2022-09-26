import { atom,  selectorFamily } from "recoil";
import { recoilPersist } from 'recoil-persist'
//state persistance in recoil see the recoil persist
const { persistAtom } = recoilPersist()
export const basketState=atom({
    key:'basketState',
    default:[],
    effects_UNSTABLE:
        [persistAtom]
    
})
 export const numberOfItemInBasket=selectorFamily({
    key:'numberOfItemInBasket',
    get:(itemId)=>({get})=>{
        const basket=get(basketState)
        const basketWithItem=basket.filter((basketItem)=>basketItem.id===itemId)
   return basketWithItem.length
    }
 })