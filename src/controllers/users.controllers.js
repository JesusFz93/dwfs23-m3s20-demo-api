const obtenerUsuarios = (req, res) => {
  return res.json({
    msg: "Usuarios obtenidos",
  });
};

const obtenerUsuario = (req, res) => {
  return res.json({
    msg: "Usuario obtenido",
  });
};

const crearUsuario = (req, res) => {
  return res.json({
    msg: "Usuario creado",
  });
};

const actualizarUsuario = (req, res) => {
  return res.json({
    msg: "Usuario actualizado",
  });
};

const eliminarUsuario = (req, res) => {
  return res.json({
    msg: "Usuario eliminado",
  });
};

module.exports = {
  obtenerUsuarios,
  obtenerUsuario,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
};
