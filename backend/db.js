const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://Namo123:Namo123@cluster0.no01s.mongodb.net/backend?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true
    }

);

const paymentSchema  = new mongoose.Schema({
    id :String,
    itemId: String,
    paid: Boolean
});

const Payment= mongoose.model('Payment',paymentSchema);

module.exports= {
    Payment
};