import Ember from 'ember';

import Production from '../models/production';
const Promise = Ember.RSVP.Promise;

export default Ember.Route.extend({
    model(params) {
        /*return {
            "ProductName": "Siemens",
            "DimensionName": "1\" X 4\" X 14'",
            "BoardsSum": 20,
            "BoardFeetSum": 10000
        }*/
        //return Ember.$.getJSON(`/data/production.json?start=${params.start}&end=${params.end}`);
        return new Promise(function(resolve) {
            setTimeout(function(){
                let data = Ember.$.getJSON(`/data/production.json?stars_at=${params.start}&ends_at=${
                  params.end}`);
                data.then(function(data) {
                  let records = [];
                  data.forEach(function(item){
                      records.push( Production.create(item) );
                  });
                  resolve(records);
                });
            }, 400);
        });
    }
});
