// Importar bcrypt para el hash de contraseñas y jwt para generar tokens
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Importar el modelo de usuario
import User from './index.js';

const AuthController = {
  login: async (req, res) => {
    // Extraer nombre de usuario y contraseña del cuerpo de la solicitud
    const { userName, password } = req.body;

    try {
      // Buscar al usuario en la base de datos por nombre de usuario
      const user = await User.findOne({ userName });

      // Si no se encuentra el usuario, devolver un error de credenciales inválidas
      if (!user) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
      }

      // Verificar la contraseña
      const isPasswordValid = await bcrypt.compare(password, user.password);

      // Si la contraseña no coincide, devolver un error de credenciales inválidas
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
      }

      // Generar un token de autenticación
      const token = jwt.sign({ userId: user._id }, 'tu-secreto-seguro', { expiresIn: '1h' });

      // Devolver el token como respuesta
      res.status(200).json({ token });
    } catch (error) {
      console.error('Error de autenticación:', error);
      // Si hay algún error durante la autenticación, devolver un error interno del servidor
      res.status(500).json({ message: 'Error de autenticación' });
    }
  }
};

export default AuthController;
