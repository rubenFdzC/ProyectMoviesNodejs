const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const Cinema = require ("../api/models/cinema.model");

const arrayCinemas = [
{
    "name": "primer cine",
    "city": "madrid",
    "postalCode": "28223",
    "movies": []
},
{
    "name": "segundo cine",
    "city": "sevilla",
    "postalCode": "20987",
    "movies": []
},
{
    "name": "tercer cine",
    "city": "galicia",
    "postalCode": "27000",
    "movies": []
},
{
    "name": "cuarto cine",
    "city": "valencia",
    "postalCode": "21543",
    "movies": []
}
];

mongoose.connect(process.env.DB_URL, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  })
  
  .then(async () => {
      const allCinemas = await Cinema.find();
      if(allCinemas.length > 0){
          await Cinema.collection.drop()
          console.log("Deleted cinemas");
      };
  })
  .catch((err) => console.log("Error deleting cinemas", err))
  .then(async () => {
      const cinemasMap = arrayCinemas.map((cinema) => new Cinema(cinema));
      await Cinema.insertMany(cinemasMap);
      console.log(`${arrayCinemas.length} Inserted cinemas`);
  })
  .catch((err) => console.log("Error inserting cinemas", err))
  .finally(() => mongoose.disconnect());
  
