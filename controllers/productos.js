// controlador para el manejo de los productos

// conectamos el controlador con su modelo correspondiente

let Producto = require("../models/productos");

// toda la logica de un crud tipico listartodos, listarpor id, crear, actualizar, borrar...

/** 
@description funcion que hace el login o ingreso al sistema con autenticacion de 2 factores
@author Waloson
@param req la peticion con usuario y password
@param res   falso si no existe el usuario, si existe devuelve true y el token en formato json con ventana de vida de 4h
@version 01 -24-02-2025
@callback funcion asincronica que ejecuta la api
@function login del sistema
@class Productos
*/

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
    await productoNuevo.save(); //escribe en mongo

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

  /*  if (req.params.id) {
    let id = id;
  } else {
    console.log("le falta el parametro");
  } */

  try {
    // logica de buscar y mostrar el resultado del query
    //let consulta = await Producto.find({ id: req.params.id }).exec();
    let consulta = await Producto.findById(id).exec();
    return res.send({
      estado: true,
      mensaje: "insercion exitosa !",
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
    let consulta = await Producto.findByIdAndUpdate(id, datos).exec();
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
  console.log(id);

  try {
    let consulta = await Producto.findOneAndDelete({ _id: id }).exec();
    //let consulta = await Producto.findByIdAndDelete(id).exec();
    console.log(consulta);
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
  listartodos,
  nuevo,
  buscarxid,
  borrarxid,
  actualizarxid,
};
