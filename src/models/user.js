const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  user_name: {
    type: String,
    required: [true, "El user_name es obligatorio"],
    unique: true,
  },

  password: {
    type: String,
  },
});

module.exports = model("user", UserSchema, "users");
