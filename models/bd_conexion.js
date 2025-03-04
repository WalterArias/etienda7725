// instanciar la libreria mongoose
const mongoose = require("mongoose");

const conexion = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/etienda");
    console.log("ok conectado!");
  } catch (error) {
    console.log(`error en la conexion: ${error}`);
    throw new Error(error); //
  }
};

module.exports = conexion;
