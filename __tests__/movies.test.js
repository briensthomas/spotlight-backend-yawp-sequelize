const request = require('supertest');
const app = require('../lib/app');
const db = require('../lib/models');

describe('user routes', () => {
  beforeEach(async () => {
    await db.sequelize.sync({ force: true });
    try {
      await db.genre.bulkCreate([
        {
          name: 'Action'
        },
        {
          name: 'Comedy'
        }
      ]);
      await db.movies.bulkCreate([
        {
          title: 'A Knight\'s Tale',
          description:
            'After his master dies, a peasant squire, fueled by his desire for food and glory, creates a new identity for himself as a knight.',
          image:
            'https://www.imdb.com/title/tt0183790/mediaviewer/rm3970210048/?ref_=tt_ov_i',
          releasedYear: 2001,
          genre_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'CHIPS',
          description:
            'An inexperienced rookie is teamed up with a hardened pro at the California Highway Patrol in Los Angeles; the newbie officer soon learns his partner is really an undercover Fed investigating a heist which may involve some crooked cops.',
          image:
            'https://www.imdb.com/title/tt0493405/mediaviewer/rm3657251072/?ref_=tt_ov_i',
          releasedYear: 2017,
          genre_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    } catch (e) {
      console.log(e);
    }
  });
  afterAll(async () => {
    await db.sequelize.close();
  });

  it('/movies returns a list of movies including genre', async () => {
    const res = await request(app).get('/api/v1/movies');
    console.log(res.body);
    expect(res.status).toBe(200);
    expect(res.body).toEqual([
      {
        id: expect.any(Number),
        title: 'A Knight\'s Tale',
        description:
          'After his master dies, a peasant squire, fueled by his desire for food and glory, creates a new identity for himself as a knight.',
        image:
          'https://www.imdb.com/title/tt0183790/mediaviewer/rm3970210048/?ref_=tt_ov_i',
        releasedYear: 2001,
        genre_id: 1,
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      },
      {
        id: expect.any(Number),
        title: 'CHIPS',
        description:
          'An inexperienced rookie is teamed up with a hardened pro at the California Highway Patrol in Los Angeles; the newbie officer soon learns his partner is really an undercover Fed investigating a heist which may involve some crooked cops.',
        image:
          'https://www.imdb.com/title/tt0493405/mediaviewer/rm3657251072/?ref_=tt_ov_i',
        releasedYear: 2017,
        genre_id: 2,
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      },
    ]);
  });
});
