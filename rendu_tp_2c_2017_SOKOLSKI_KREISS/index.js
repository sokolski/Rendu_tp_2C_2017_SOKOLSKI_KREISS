/**
 * Created by sokolski adrien on 17/03/2017.
 */
const {Poney} = require('./poney');
const {NuitJour, events} = require('./cycle_jour_nuit');

const jour = new NuitJour();
jour.beginNuitJour();
const listPoney = [];

for (let i = 0; i < 10; i++){
  listPoney.push(new Poney(events));
}