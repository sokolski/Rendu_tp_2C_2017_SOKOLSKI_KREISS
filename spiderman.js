let instance = null;

class Spiderman {
  constructor() {
    if (!instance) {
      instance = this;
      this.poneyFarm = [];

      setInterval(() => {
        this.onPoney();
      }, 4000);
    }
    return instance;
  }
  onPoney() {
    const i = Math.floor(Math.random() * this.poneyFarm.length);
    this.poneyFarm[i].onPoney()
      .then(() => console.log('Spiderman chevauche un poney'))
      .catch(() => console.log('Spiderman ne chevauche plus de poney'));
  }
}

module.exports = {Spiderman};
