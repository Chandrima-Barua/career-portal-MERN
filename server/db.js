const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://chandrima:crudmongo@cluster0.kq65b.mongodb.net/mongocrud?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
).catch((e) => {
    console.error("Connection error", e.message);
});


const db = mongoose.connection;

module.exports = db;

