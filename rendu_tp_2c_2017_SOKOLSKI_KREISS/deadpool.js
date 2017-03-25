/**
 * Created by sokolski adrien on 17/03/2017.
 */

let instance = null;

class Deadpool {
  constructor() {

    if (!instance) {
      instance = this;
      this.energyLevel = 0;
      this.helpTransform = 5;
      this.poneyFarm = [];
      this.poneyNumber = 0;
      this.unicornNumber = 0;
    }
    setInterval(() => {
      this.poneyNumber = this.poneyFarm.length;
      if (this.poneyNumber > 1) {
        this.feeedUnicorn(Math.floor(Math.random() * this.poneyNumber));

      }
    }, 2000);
    setInterval(() => {
      if (this.energyLevel > 20) {
        console.log('Deadpool ' + 'do something Deadpool');
        this;
        energyLevel -= 20;
      }
    }, 1000 * this.helpTransform);

    return
    instance;
  }

  transformToUnicorn() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.countNumberUnicorn()
          .then(() => this.transformToUnicorn2())
          .then(() => resolve())
          .catch(() => reject());
      });
    }, 500);
  }

  countNumberUnicorn() {
    return new Promise(resolve => {
      this.x = 0;
      this.poneyNumber = this.poneyFarm.length;
      for (let i = 0; i < this.poneyNumber; i++) {
        if (this.poneyFarm[i].isUnicorn) {
          this.x++;
        }
      }
      this.unicornNumber = this.x;
      resolve();
    });
  }

  transformToUnicorn2() {
  return new Promise((resolve, reject)=>{
    if(Math.random()>0.1*this.unicornNumber){
      resolve();
    }else{
      reject();
    }
  });
  }

  feedUnicorn() {
    setInterval(() => {
  if (this.poneyFarm[i].isUnicorn){
    this.poneyFarm[i].deadpoolHungry()
      .then(()=>{
      this.energyLevel += 5;
      })
      .then(()=> console.log('Deadpool mange'))
      .catch(()=> console.log('Deadpool mange pas'));
  }
    },500* this.helpTransform);
  }
}
module.export = {Deadpool};