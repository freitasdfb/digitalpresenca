const { Event } = require('../models');

module.exports = {

  async index(req, res, next) {
    try {

    } catch (err) {
      return next(err);
    }

    return res.render('dashboard/index');
  },

};
