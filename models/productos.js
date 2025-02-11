//modelo para la coleccion producto
//destructuring de la clase mongoose --solo traigo los metodos que me importan
const { Schema, model } = require("mongoose");

//creamos el schema

const productoSchema = Schema(
  {
    // nombre: String,
    nombre: {
      type: String,
      required: true,
    },
    precio: { type: Number, required: false },
    //existencia: Number,
    existencia: {
      type: Number,
      required: true,
    },
  },
  { collection: "producto" }
);

module.exports = model("Producto", productoSchema);
