const { Schema, model } = require("mongoose");

const categoriaSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  icono: {
    type: String,
  },
  color: {
    type: String,
  },
});

const Categoria = new model("Categoria", categoriaSchema);

module.exports = Categoria;
