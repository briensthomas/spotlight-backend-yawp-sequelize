'use strict';

const db = require('../models');
module.exports = {
  async up (queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await db.movies.bulkCreate([
      {
        title: 'A Knight\'s Tale',
        description: 'After his master dies, a peasant squire, fueled by his desire for food and glory, creates a new identity for himself as a knight.',
        image: 'https://www.imdb.com/title/tt0183790/mediaviewer/rm3970210048/?ref_=tt_ov_i',
        releasedYear: 2001,
        genre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'CHIPS',
        description: 'An inexperienced rookie is teamed up with a hardened pro at the California Highway Patrol in Los Angeles; the newbie officer soon learns his partner is really an undercover Fed investigating a heist which may involve some crooked cops.',
        image: 'https://www.imdb.com/title/tt0493405/mediaviewer/rm3657251072/?ref_=tt_ov_i',
        releasedYear: 2017,
        genre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
