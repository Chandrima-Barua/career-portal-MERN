const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://<USER_NAME >:<password>@cluster0.kq65b.mongodb.net/<Database Name>?retryWrites=true&w=majority',
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

