// Rutas para crear usuarios
const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuarioController");

// Crea un usuario api/usuarios
router.post("/", usuariosController.crearUsuario);

module.exports = router;
