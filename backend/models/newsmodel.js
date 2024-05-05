const mongoose = require('mongoose');
const NewsRouterSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    topic: String,
    published_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('news', NewsRouterSchema);
//news название коллекции где хранятся данные