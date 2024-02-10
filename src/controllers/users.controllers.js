const obtenerUsuarios = (req, res) => {
  return res.json({
    msg: "Usuarios obtenidos",
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
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
};
