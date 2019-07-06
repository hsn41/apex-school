const { User } = require("../models/users");

router.get("/", (req, res) => {
  console.log("here");
  User.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("Error in Retrieving :" + JSON.stringify(err, undefined, 2));
    }
  });
});
module.exports = router;
