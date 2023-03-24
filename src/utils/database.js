const mongoose = require('mongoose');  


const connect = async () => {

    try {
        //Aquí conectamos a la BBDD
        const db = await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const {name, host} = db.connection;
        console.log(`Connected to ${name} DB in host: ${host}`)
        
    } catch (error) {
        console.log(`Error connecting to database: ${error}`)
    }

}

module.exports = {connect}