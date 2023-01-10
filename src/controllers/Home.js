import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Jao',
      sobrenome: 'Barbosa',
      email: 'jao1@gmail.com',
      idade: 67,
      peso: 63,
      altura: 1.78,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
