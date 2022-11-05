const mongoose = require('mongoose');

const uri = `mongodb+srv://admin:admin@cluster0.eo0p6zw.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const UserSchema = new Schema({
    email: {
        type: String,
        index: true,
        unique: true,
    },
    nome: String,
    senha: String
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = {
    UserModel,
};