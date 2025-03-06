/**
 * @description: Controlador para las categorias
 *
 * */

let Categoria = require("../models/categorias");

// toda la logica de un crud tipico listartodos, listarpor id, crear, actualizar, borrar...

const listartodas = async (req, res) => {
  try {
    // consultar todos sin filtro

    let listaCategorias = await Categoria.find().exec();
    res.status(200).send({
      exito: true,
      listaCategorias,
    });
  } catch (error) {
    res.status(500).send({
      exito: false,
      mensaje: "Error en la consulta",
    });
  }
};

//crear nuevo

const nueva = async (req, res) => {
  // llega el objeto en el body del request
  let datos = {
    nombre: req.body.nombre,
    icono: req.body.icono,
    color: req.body.color,
  };
  try {
    // instanncia del modelo Producto (collection)
    const categoriaNueva = new Categoria(datos);
    // salvamos en mongo
    await categoriaNueva.save(); //escribe en mongo
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

// buscarpor id o por otro parametro

const buscarxid = async (req, res) => {
  // recibimos el parametro por el cual debo buscar y eliminar
  let id = req.params.id;

  try {
    // logica de buscar y mostrar el resultado del query
    //let consulta = await Producto.find({ id: req.params.id }).exec();
    let consulta = await Categoria.findById(id).exec();
    return res.send({
      estado: true,
      mensaje: "exito !",
      consulta,
    });
  } catch (error) {
    return res.send({
      estado: false,
      mensaje: "error, no fue posible encontrar el registro !",
      consulta,
    });
  }
};

// actualizar de acuerdo al id del producto

const actualizarxid = async (req, res) => {
  //recibe el parametro de la consulta

  let id = req.params.id;

  //payload que viene en el body :: los datos que manda el formulario
  let datos = {
    nombre: req.body.nombre,
    icono: req.body.icono,
    color: req.body.color,
  };

  try {
    let consulta = await Categoria.findByIdAndUpdate(id, datos).exec();
    return res.send({
      estado: true,
      mensaje: "documento creado !",
      consulta,
    });
  } catch (error) {
    return res.send({
      estado: false,
      mensaje: "ocurrió un error en la insercion",
    });
  }
};

//borrar de acuerdo al id  :::: RECUERDE QUE ESTE ES UN BORRADO DIDACTICO - NO LO USE EN EL MUNDO REAL

const borrarxid = async (req, res) => {
  //recibimos el parametro
  let id = req.params.id;

  try {
    let consulta = await Categoria.findOneAndDelete({ _id: id }).exec();
    //let consulta = await Producto.findByIdAndDelete(id).exec();

    return res.send({
      estado: true,
      mensaje: "borrado exitosa !",
      consulta,
    });
  } catch (error) {
    return res.send({
      estado: false,
      mensaje: "error !",
      error,
    });
  }
};

module.exports = {
  listartodas,
  nueva,
  buscarxid,
  borrarxid,
  actualizarxid,
};
