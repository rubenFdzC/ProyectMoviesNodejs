const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const User = require ("../api/models/users.models");

const arrayUsers = [
{
    "name": "lourdes",
    "email": "lourdes@lourdes.com",
    "password": "lourdes12345",
    "membership": 1,
    "postalCode": "28007",
},{
    "name": "ruben",
    "email": "ruben@ruben.com",
    "password": "ruben12345",
    "membership": 2,
    "postalCode": "22389",
},{
    "name": "nico",
    "email": "nico@nico.com",
    "password": "nico12345",
    "membership": 3,
    "postalCode": "24567",
},{
    "name": "daniel",
    "email": "daniel@daniel.com",
    "password": "daniel12345",
    "membership": 4,
    "postalCode": "28223",
},
];

mongoose.connect(process.env.DB_URL, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  })
  
  .then(async () => {
      const allUsers = await User.find();
      if(allUsers.length > 0){
          await User.collection.drop()
          console.log("Deleted users");
      };
  })
  .catch((err) => console.log("Error deleting users", err))
  .then(async () => {
      const usersMap = arrayUsers.map((user) => new User(user));
      await User.insertMany(usersMap);
      console.log(`${arrayUsers.length} Inserted users`);
  })
  .catch((err) => console.log("Error inserting users", err))
  .finally(() => mongoose.disconnect());
  
