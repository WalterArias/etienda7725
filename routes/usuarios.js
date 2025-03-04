// rutas para consumir el modulo productos del SERVICIO ECOMMERCE

const express = require("express");
const router = express.Router();
// middleware: util para manejar los request en body del formulario (files)
const multer = require("multer");

// instanciamos el controlador correspondiente
const usuariosCtr = require("../controllers/usuarios");

// configurar emulacion del disco duro local

const storage = multer.diskStorage({
  //ruta de destino para almacenar los archivos
  destination: (req, file, cb) => {
    cb(null, "./uploads/usuarios/");
  },
  //estructura para denominar los archivos
  filename: (req, file, cb) => {
    //armamos el nombre del archivo
    cb(null, Date.now() + "-" + file.originalname);
  },
});
// instancia del multer con la configuracion de almacenamiento y nombre de archivo
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
