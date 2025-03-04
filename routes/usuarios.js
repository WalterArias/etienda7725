// rutas para consumir el modulo productos del SERVICIO ECOMMERCE

const express = require("express");
const router = express.Router();
const multer = require("multer");

// instanciamos el controlador correspondiente
const usuariosCtr = require("../controllers/usuarios");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/usuarios/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const uploads = multer({ storage });

// rutas que entregara el modulo producto

router.get("/usuarios/listartodos", usuariosCtr.listartodos);
router.post("/usuarios/registro", usuariosCtr.registro);
router.post("/usuarios/login", usuariosCtr.login);
router.post(
  "/usuarios/subirimagen/",
  uploads.single("file0"),
  usuariosCtr.subirImagen
);
router.get("/usuarios/avatar/:file", usuariosCtr.avatar);
/*router.get("/producto/buscarxid/:id", productoCtr.buscarxid);
router.delete("/producto/borrarxid/:id", productoCtr.borrarxid);
router.put("/producto/actualizarxid/:id", productoCtr.actualizarxid); */

module.exports = router;
