const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//mongoose

// Define collection and schema
let Data = new Schema({
  date: {
    type: String
  },
  startPoint: {
    type: String
  },
  endPoint: {
    type: String
  },
  transportType: {
    type: String
  },
  kilometers: {
    type: Number
  },
  numberOfWorkers: {
    type: Number
  },
  travelType: {
    type: Number
  },
  CO2PerPerson: {
    type: Number
  },
  totalCO2: {
    type: Number
  }
}, {
  collection: 'dataCO2'
})

module.exports = mongoose.model('Data', Data)