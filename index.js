const express = require ("express");
const dotenv = require ("dotenv");
const {connect} = require ("./src/utils/database");
const cloudinary = require('cloudinary').v2;

const routerMovie = require ("./src/api/routes/movies.routes");
const routerCinema = require ("./src/api/routes/cinema.routes");
const routerUser = require ('./src/api/routes/users.routes');

dotenv.config();
const PORT = process.env.PORT || 8000;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

const app = express();

connect();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/movies',routerMovie);
app.use('/cinemas',routerCinema);
app.use ('/users', routerUser);

app.listen (PORT, () => console.log(`Listening on: http://localhost:${PORT}`));
