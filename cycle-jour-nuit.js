const {EventEmitter} = require('events');

const eventJourNuit = new EventEmitter();

let instance = null;

class NuitJour {

  constructor() {
    if (!instance) {
      instance = this;
      this.jour = true;
      this.cycleJourNuit = setInterval(() => {
        this.activeCycle();
      }, 10000);
    }
    return instance;
  }
  activeCycle() {
    this.jour = !this.jour;
    if (this.jour) {
      eventJourNuit.emit('changecycle', 'jour');
    } else {
      eventJourNuit.emit('changecycle', 'nuit');
    }
  }
}

module.exports = {NuitJour, eventJourNuit};
