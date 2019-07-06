const mongoose = require("mongoose");
const uri =
  "mongodb+srv://admin:HPLAPTOP123-@meancluster-uh61k.mongodb.net/meanDb?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true }, err => {
  if (!err) console.log("MongoDB Connection Succeeded");
  else
    console.log(
      "Error in DB Connection : " + JSON.stringify(err, undefined, 2)
    );
});
module.exports = mongoose;
