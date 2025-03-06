// rutas para consumir el modulo productos del SERVICIO ECOMMERCE

const express = require("express");
const router = express.Router();

// instanciamos el controlador correspondiente
const categoriasCtr = require("../controllers/categorias");

router.get("/categorias/listartodas", categoriasCtr.listartodas);
router.post("/categorias/nueva", categoriasCtr.nueva);

module.exports = router;
