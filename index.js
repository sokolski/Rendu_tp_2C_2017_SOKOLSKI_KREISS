const {Poney} = require('./poney');
const {NuitJour, eventJourNuit} = require('./cycle-jour-nuit');

const jour = new NuitJour();
jour.activeCycle();
const listPoney = [];

for (let i = 0; i < 10; i++) {
  listPoney.push(new Poney(eventJourNuit));
}
