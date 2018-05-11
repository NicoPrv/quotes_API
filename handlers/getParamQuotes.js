

const PG = require("pg");


function getParamQuotes (request, result) {
const params = (request.query);
let query;
  if(params.theme!=null && params.sport!=null){
    query="SELECT * FROM quotes WHERE theme LIKE ($1::text) AND sport LIKE ($2::text) AND selected = $3::integer";
    array=[`%${params.theme}%`,`%${params.sport}%`,1];
  } else if (params.theme!=null){
    query="SELECT * FROM quotes WHERE theme LIKE ($1::text) AND selected = $2::integer";
    array=[`%${params.theme}%`,1];


  } else if (params.sport!=null){
    query="SELECT * FROM quotes WHERE sport LIKE ($1::text) AND selected = $2::integer";
    array=[`%${params.sport}%`,1];
  }else{
    query="SELECT * FROM quotes WHERE selected = $1::integer";
    array=[1];
  }




  const client = new PG.Client(process.env.DATABASE_URL);
  client.connect();
  client.query(

    query,
    array,

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

  module.exports = getParamQuotes;
