const { Router } = require("express");
const {
  obtenerUsuarios,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
} = require("../controllers/users.controllers");

const router = Router();

router.get("/", obtenerUsuarios);
router.post("/", crearUsuario);
router.put("/", actualizarUsuario);
router.delete("/", eliminarUsuario);

module.exports = router;
