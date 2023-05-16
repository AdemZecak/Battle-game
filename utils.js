export function getDiceRollArray(diceCount){

    return new Array(diceCount).fill(0).map(function(){
       return Math.floor(Math.random() * 6) + 1
   })
 }



export function getDicePlaceholderHtml(diceCount){
  return new Array(diceCount).fill(0).map(function(){
    return `<div class="placeholder-dice"></div>`
  }).join("")
 }

export const getPrecentage = (remainingHealth,maximumHealth) =>
 (100*remainingHealth)/maximumHealth