const { Schema, model } = require("mongoose");

const usuarioSchema = Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    telefono: {
      type: String,
      required: true,
    },
    esAdmin: {
      type: Boolean,
      default: false,
    },
    direccion: {
      type: String,
      default: "",
    },
    zip: {
      type: String,
      default: "",
    },
    ciudad: {
      type: String,
      default: "",
    },
    pais: {
      type: String,
      default: "",
    },
    imagen: {
      type: String,
      default: "default.png",
    },
  },
  { collection: "usuarios" }
);

//cambio en el estilo de exportacion

const Usuario = new model("Usuario", usuarioSchema);
module.exports = Usuario;
