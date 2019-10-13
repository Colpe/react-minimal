import React from 'react'
import AppTitle from './AppTitle'
import { randomBytes } from 'crypto';

const MyApp = () => (
  <div>
    <AppTitle />
    <h1>Minimal React delimatj</h1>
    <p>Bundle size: 58 bytes, Load time of the bundle: 52 ms, Last commit: Customize headline</p>
  </div>
)

const generateArray = (n) =>( Array.from(Array(n),(x,index)=>index+1) )
console.log(generateArray(10));


const generateRandomArray = (n) =>( Array.from(Array(n),(x,index)=>Math.ceil(Math.random()*24 +1)) )

console.log(generateRandomArray(10));


export default MyApp