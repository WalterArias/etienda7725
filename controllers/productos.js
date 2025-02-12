// controlador para el manejo de los productos

// conectamos el controlador con su modelo correspondiente

let Producto = require("../models/productos");

// toda la logica de un crud tipico listartodos, listarpor id, crear, actualizar, borrar...

const listartodos = async (req, res) => {
  try {
    // consultar todos sin filtro

    let listaProductos = await Producto.find().exec();
    res.status(200).send({
      exito: true,
      listaProductos,
    });
  } catch (error) {
    res.status(500).send({
      exito: false,
      mensaje: "Error en la consulta",
    });
  }
};

//crear nuevo

const nuevo = async (req, res) => {
  // llega el objeto en el body del request

  let datos = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    imagen: req.body.imagen,
    marca: req.body.marca,
    precio: req.body.precio,
    existencia: req.body.existencia,
    rating: req.body.rating,
    numRevisiones: req.body.numRevisiones,
    estaOfertado: req.body.estaOfertado,
  };
  try {
    // instanncia del modelo Producto (collection)
    const productoNuevo = new Producto(datos);
    // salvamos en mongo
    productoNuevo.save(); //escribe en mongo

    return res.send({
      estado: true,
      mensaje: "insercion exitosa !",
    });
  } catch (error) {
    return res.send({
      estado: false,
      mensaje: `ha ocurrido un error en la consulta: ${error}`,
    });
  }
};

module.exports = {
  listartodos,
  nuevo,
};
