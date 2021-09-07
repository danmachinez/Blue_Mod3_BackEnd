const mongoose = require('mongoose');

function Conn(url, porta, banco){
    mongoose.connect('mongodb+srv://dbUser:ycMCn2BSlUeQTzSi@blue-db.upmwn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('MongoDB connected');
    }).catch((err) =>{
        console.error(error);
    })
};

module.exports = Conn;