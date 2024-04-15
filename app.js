// "nodemon app.j" para conectar con mongodb
const express = require("express");
const cors = require("cors");
const User = require("./mongo"); // Importar el modelo de usuario
const bcrypt = require("bcrypt"); // Importar bcrypt para el hash de contraseñas

const app = express();
app.use(express.json());
app.use(cors());

// Ruta para registrar un nuevo usuario
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verificar si el usuario ya está registrado
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    // Hash de la contraseña antes de guardarla en la base de datos
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear un nuevo usuario con el email y la contraseña hasheada
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Usuario registrado correctamente" });
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.status(500).json({ message: "Error al registrar usuario" });
  }
});

// Ruta para iniciar sesión
app.post("/components/Usuario/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Buscar el usuario por email en la base de datos
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    // Comparar la contraseña ingresada con la almacenada en la base de datos
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    // Si las credenciales son válidas, se puede considerar el usuario autenticado
    res.status(200).json({ message: "Inicio de sesión exitoso" });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ message: "Error al iniciar sesión" });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
