const { Schema, model } = require("mongoose");

const pedidoSchema = new Schema({
  direcciondespacho: {
    type: String,
    required: true,
  },
  ciudad: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
    default: "pendiente",
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
  },
});

const Pedido = new model("Pedido", pedidoSchema);
module.exports = Pedido;
