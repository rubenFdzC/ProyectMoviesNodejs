const Cinema = require("../models/cinema.model");

const getCinema = async (req, res) => {
  try {
    const allCinemas = await Cinema.find().populate("movies"); //recojo los datos con una peticion a mongo
    return res.status(200).json(allCinemas); // devuelvo los datos en formato json con un status 200
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getCinemaById = async (req, res) => {
  try {
    const {id} = req.params;
    const cinema = await Cinema.findById(id).populate("movies");
    if (!cinema) {
      return res.status(404).json({message: "Cinema not found"});
    }
    return res.status(200).json(cinema);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCinema = async (req, res) => {
  try {
    console.log(req.body);
    const newCinema = new Cinema(req.body); // creamos una nueva pelicula con los datos enviados
    const createdCinema = await newCinema.save(); // guardamos el cliente en mongo y nos devuelve el nuevo elemento
    return res.status(201).json(createdCinema);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putCinema = async (req, res) => {
  try {
    const {id} = req.params;
    const putCinema = new Cinema(req.body);
    putCinema._id = id;
    const updateCinema = await Cinema.findByIdAndUpdate(id, putCinema, {new: true}); //Buscamos por id y actualizamos el elemento
    if (!updateCinema) {
      //Controlamos que el elemento existiera y si no enviamos error 404
      return res.status(404).json({ "message": "Cinema not found" });
    }
    return res.status(200).json(updateCinema);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCinema = async (req, res) => {
  try {
    const {id} = req.params;
    const deleteCinema = await Cinema.findByIdAndDelete(id); //Buscamos por id y borramos el elemento
    if (!deleteCinema) {
      //Controlamos que el elemento existiera y si no enviamos error 404
      return res.status(404).json({ "message": "Cinema not found" });
    }
    return res.status(200).json(deleteCinema);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCinema,
  getCinemaById,
  postCinema,
  putCinema,
  deleteCinema,
};
