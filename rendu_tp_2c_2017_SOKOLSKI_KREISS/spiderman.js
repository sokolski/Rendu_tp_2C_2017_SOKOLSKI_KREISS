/**
 * Created by sokolski adrien on 17/03/2017.
 */
let instance = null;

class Spiderman{
  constructor(){
    if (!instance){
      instance = this;
      this.poneyFarm = [];

      setInterval(()=>{
        this.onPoney();
      },4000);
    }
    return instance;
  }
  onPoney(){
    const i = Math.floor(Math.random()* this.poneyFarm.length);
    this.poneyFarm[i].ridingPoney()
      .then(()=> console.log('Spiderman est avec un poney'))
      .catch(()=> console.log('spiderman nest plus sur un poney'));
  }
}

module.export = {Spiderman};