const mongoose = require("mongoose");

// Conectarse a la base de datos MongoDB
mongoose.connect("mongodb://localhost:27017/UsuariosCar", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB conectado correctamente");
})
.catch((error) => {
  console.error("Error al conectar con MongoDB:", error);
});

// Definir el esquema de la colección de usuarios
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Garantiza que no se puedan registrar usuarios con el mismo email
  },
  password: {
    type: String,
    required: true,
  },
});

// Crear el modelo de la colección de usuarios
const User = mongoose.model("User", userSchema);

module.exports = User;
