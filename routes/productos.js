// rutas para consumir el modulo productos del SERVICIO ECOMMERCE

const express = require("express");
const router = express.Router();

// instanciamos el controlador correspondiente
const productoCtr = require("../controllers/productos");

// rutas que entregara el modulo producto

router.get("/producto/listartodos", productoCtr.listartodos);

router.post("/producto/nuevo", productoCtr.nuevo);
router.get("/producto/buscarxid/:id", productoCtr.buscarxid);
router.delete("/producto/borrarxid/:id", productoCtr.borrarxid);
router.put("/producto/actualizarxid/:id", productoCtr.actualizarxid);

module.exports = router;
