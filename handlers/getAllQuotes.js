

const PG = require("pg");


function getAllQuotes (request, result) {
  const client = new PG.Client(process.env.DATABASE_URL);
  client.connect();
  client.query(
    "SELECT * FROM quotes WHERE selected=1",
    function(error, res) {
      client.end();
      if (error) {
        console.warn(error);
        //result.send("ERROR");
      } else {
        result.json(res.rows);
      }
    }
  );

//result.send("Hello World !")

}

  module.exports = getAllQuotes;
