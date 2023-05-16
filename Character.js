import { getDicePlaceholderHtml, getDiceRollArray, getPrecentage } from "./utils.js"


export function Character(data){
    
    Object.assign(this,data)

    this.maxHealth = this.health

    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.takeDamage = function(attackScoreArray){  
      const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
      this.health -= totalAttackScore
      if (this.health <= 0){
          this.dead = true  
          this.health = 0
      } 
      
  }

   this.getHealthBarHtml = function(){
   const percent = getPrecentage(this.health,this.maxHealth)
   return `
   <div class="health-bar-outer">
      <div class="health-bar-inner ${percent < 26 ? "danger":""}" 
         style="width: ${percent}%">
      </div>
   </div>`
   }
 
    this.getDiceHtml = function(diceCount){
       this.currentDiceScore = getDiceRollArray(this.diceCount)
       this.diceArray = this.currentDiceScore.map(num =>
         `<div class="dice">${num}</div>`
       ).join("")
      }
 
 
    this.getCharacterHtml = function (){
 
       const {name,avatar,health,diceCount,diceArray,percent} = this
       const healthBar = this.getHealthBarHtml()
      
       return `
          <div class="character-card">
             <h4 class="name">${name}</h4>
             <img class="avatar" src="${avatar}"/>
             <p class="health">health: <b>${health}</b></p>
             ${healthBar}
             <div class="dice-container">
                ${diceArray}
             </div>
          </div> 
    
    `
    }  

 }









