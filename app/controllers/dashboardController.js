const { Event, User } = require('../models');

module.exports = {

  async index(req, res, next) {
    try {
      const events = await Event.findAll({
        // include: [{ model: User, as: 'users' }],
      });

      return res.render('dashboard/index', { events });
    } catch (err) {
      return next(err);
    }
  },
};
