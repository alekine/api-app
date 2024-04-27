const AuthController = {
  login: async (req, res) => {
    const { userName, password } = req.body;

    try {
      // Buscar al usuario en la base de datos por nombre de usuario
      const user = await User.findOne({ userName });

      // Si no se encuentra el usuario, devolver un error
      if (!user) {
        return res.status(401).json({ authenticated: false, message: 'Credenciales inválidas' });
      }

      // Verificar la contraseña
      const isPasswordValid = await bcrypt.compare(password, user.password);

      // Si la contraseña no coincide, devolver un error
      if (!isPasswordValid) {
        return res.status(401).json({ authenticated: false, message: 'Credenciales inválidas' });
      }

      // Generar un token de autenticación
      const token = jwt.sign({ userId: user._id }, 'tu-secreto-seguro', { expiresIn: '1h' });

      // Devolver el token como respuesta
      res.status(200).json({ authenticated: true, token });
    } catch (error) {
      console.error('Error de autenticación:', error);
      res.status(500).json({ message: 'Error de autenticación' });
    }
  }
};

export default AuthController;
