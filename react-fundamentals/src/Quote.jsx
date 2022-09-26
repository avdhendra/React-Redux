import React, { useRef,useState } from 'react'
import { useRecoilValue } from 'recoil'
import { fetchQuote } from './atoms/QuoteState'

export default function Quote() {
    const [firstName,setFirst]=useState('sarty')
    const[lastName,setLast]=useState('singh')
        const quote=useRecoilValue(fetchQuote({firstName,lastName}))
    const firstRef=useRef(null)
    const lastRef=useRef(null)
const submitName=()=>{
    setFirst(firstRef.current.value)
    setLast(lastRef.current.value)

}
  return (
    <div>
        <input placeholder='firstname' ref={firstRef}/><input placeholder='lastname' ref={lastRef}/>
    <button onClick={submitName}>Generate The Quote</button>
        <h2>Quote of the Day: {quote}</h2>
    </div>
  )
}
