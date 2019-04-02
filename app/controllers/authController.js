const bcrypt = require('bcryptjs');

const { User } = require('../models');

module.exports = {
  signin(req, res) {
    return res.render('auth/signin');
  },

  signup(req, res) {
    return res.render('auth/signup');
  },

  async register(req, res) {
    const { cpf } = req.body;

    if (await User.findOne({ where: { cpf } })) {
      req.flash('error', 'CPF já cadastrado');
      return res.redirect('back');
    }

    const password = await bcrypt.hash(req.body.password, 5);

    await User.create({ ...req.body, password });
    req.flash('success', 'Cadastro realizado com sucesso');
    return res.redirect('/');
  },

  async authenticate(req, res) {
    const { cpf, password } = req.body;

    const user = await User.findOne({ where: { cpf } });

    if (!user) {
      req.flash('error', 'Usuário inexistente');
      return res.redirect('back');
    }

    if (!await bcrypt.compare(password, user.password)) {
      req.flash('error', 'Senha incorreta');
      return res.redirect('back');
    }

    req.session.user = user;

    return req.session.save(() => {
      res.redirect('app/dashboard');
    });
  },
};
