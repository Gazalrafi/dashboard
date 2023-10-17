const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    end_year: String,
    intensity: Number,
    sector: String,
    topic: String,
    insight: String,
    url: String,
    region: String,
    start_year: String,
    impact: String,
    added: String,
    published: String,
    country: String,
    relevance: Number,
    pestle: String,
    source: String,
    title: String,
    likelihood: Number
});

const Data = mongoose.model('Data', dataSchema);

console.log(Data)

// const data=Data.find().exec();
// console.log(data)

module.exports = Data;
