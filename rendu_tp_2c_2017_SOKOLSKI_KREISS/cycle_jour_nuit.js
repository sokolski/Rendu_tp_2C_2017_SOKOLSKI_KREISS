/**
 * Created by sokolski adrien on 17/03/2017.
 */
const {Evenement} = require('events');

const nuitjour = new Evenement();

let instance = null;
class NuitJour{

  constructor(){
    if(!instance){
      instance = this;
      this.jour = true;
      this.cycleJourNuit = setInterval(()=>{
        this.activecycle();
      },10000);
    }
    return instance;
  }
  activecycle(){
    this.jour = !this.jour;
    if (this.jour){
      nuitjour.emit('changecycle','jour');
    }else{
      nuitjour.emit('changecycle','nuit');
    }
  }

}

module.export = {NuitJour, nuitjour};