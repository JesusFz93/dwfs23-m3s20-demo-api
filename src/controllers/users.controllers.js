const User = require("../models/user");

const obtenerUsuarios = async (req, res) => {
  const usuarios = await User.find();

  return res.json({
    msg: "Usuarios obtenidos",
    data: usuarios,
  });
};

const obtenerUsuario = async (req, res) => {
  const { id } = req.params;

  const usuarioObtenido = await User.findById(id);

  return res.json({
    msg: "Usuario obtenido",
    data: usuarioObtenido,
  });
};

const crearUsuario = async (req, res) => {
  const { user_name, password } = req.body;

  const usuario = {
    user_name: user_name,
    password: password,
  };

  const usuario_creado = await User(usuario).save();

  return res.json({
    msg: "Usuario creado",
    data: usuario_creado,
  });
};

const actualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;

  const usuario = {
    password: password,
  };

  const usuario_actualizado = await User.findByIdAndUpdate(id, usuario, {
    new: true,
  });

  return res.json({
    msg: "Usuario actualizado",
    data: usuario_actualizado,
  });
};

const eliminarUsuario = async (req, res) => {
  const { id } = req.params;

  const usuario_eliminado = await User.findByIdAndDelete(id);

  return res.json({
    msg: "Usuario eliminado",
    data: usuario_eliminado,
  });
};

module.exports = {
  obtenerUsuarios,
  obtenerUsuario,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
};
