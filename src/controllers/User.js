import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const novoUser = await User.create(req.body);
      res.json(novoUser);
    } catch (error) {
      res.status(400).json({
        erros: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
