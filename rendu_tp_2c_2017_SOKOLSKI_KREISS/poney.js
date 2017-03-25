/**
 * Created by sokolski adrien on 17/03/2017.
 */
const {Deadpool} = require('./deadpool');
const {Spiderman} = require('./spiderman');

class Poney{
  constructor(ev){
    this.isUnicorn = false;
    this.energy = 10;
    this.energyLevel = 0;
    this.deadpool = new Deadpool();
    this.spiderman = new Spiderman();
    this.deadpool.poneyFarm.push(this);
    this.spiderman.poneyFarm.push(this);

    ev.on('changecycle', period =>{
      if (period == 'jour'){
        this.energy = 10;
      }else if (period == 'night'){
        this.energy = 20;
      }
    });

    setInterval(() => {
      this.energyLevel += this.energy;
      if (this.energyLevel > 50 && !this.isUnicorn){
        this.deadpool.transformToUnicorn()
          .then(()=> this.setToUnicorn())
          .catch(()=> {
            console.log('pas de transformation en Unicorn')
          });
      }
    }, 1000);
  }

  setToUnicorn() {
    setTimeout(() => {
      if (Math.random()* this.energyLevel > 50) {
        this.isUnicorn = true;
        console.log('un poney cest transformé en Unicorn')
      }this.energyLevel = 0;
    }, 1000);
  }
  returnToPoney() {
    setTimeout(() => {
      this.isUnicorn = false;
      console.log('une Unicorn est redevenue poney')
      this.energyLevel = 0;
    },1000);
  }
  deadpoolHungry(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if (this.isUnicorn){
          this.returnToPoney();
          resolve();
        }else{
          reject();
        }
      });
    },1000);
  }
onPoney(){
    return new Promise((resolve, reject)=> {
      setTimeout(()=> {
        if (this.isUnicorn){
          this.returnToPoney();
          resolve();
        }else if (this.energyLevel> 40){
          this.energyLevel = 30;
          resolve();
        }else{
          reject
        }
      });
    },500);
}
}

module.exports = {Poney};

