const { Schema, model } = require("mongoose");

const pedido_detalleSchema = new Schema({
  cantidad: {
    type: Number,
    required: true,
  },
  producto: {
    type: Schema.Types.ObjectId,
    ref: "Producto",
  },
  pedido: {
    type: Schema.Types.ObjectId,
    ref: "Pedido",
  },
});

const PedidoDetalle = new model("PedidoDetalle", pedido_detalleSchema);

module.exports = PedidoDetalle;
