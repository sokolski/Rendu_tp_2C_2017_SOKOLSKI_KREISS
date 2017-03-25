const {Deadpool} = require('./deadpool');
const {Spiderman} = require('./spiderman');

class Poney {
  constructor(ev) {
    this.isUnicorn = false;
    this.energy = 10;
    this.energyLevel = 0;
    this.deadpool = new Deadpool();
    this.spiderman = new Spiderman();
    this.deadpool.poneyFarm.push(this);
    this.spiderman.poneyFarm.push(this);

    ev.on('changecycle', period => {
      if (period === 'jour') {
        this.energy = 10;
      } else if (period === 'night') {
        this.energy = 20;
      }
    });

    setInterval(() => {
      this.energyLevel += this.energy;
      if (this.energyLevel > 50 && !this.isUnicorn) {
        this.deadpool.transformToUnicorn()
          .then(() => this.setToUnicorn())
          .catch(() => {
            console.log('La transformation en licorne a été refusée');
          });
      }
    }, 1000);
  }

  setToUnicorn() {
    setTimeout(() => {
      if (Math.random() * this.energyLevel > 50) {
        this.isUnicorn = true;
        console.log('Un poney est devenu une licorne');
      }
      this.energyLevel = 0;
    }, 1000);
  }
  returnToPoney() {
    setTimeout(() => {
      this.isUnicorn = false;
      console.log('Une licorne est redevenue un  poney');
      this.energyLevel = 0;
    }, 1000);
  }
  deadpoolHungry() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.isUnicorn) {
          this.returnToPoney();
          resolve();
        } else {
          reject();
        }
      });
    }, 1000);
  }
  onPoney() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.isUnicorn) {
          this.returnToPoney();
          resolve();
        } else if (this.energyLevel > 40) {
          this.energyLevel = 30;
          resolve();
        } else {
          reject();
        }
      });
    }, 500);
  }
}

module.exports = {Poney};

