const request = require('supertest');
const server = require('../src/server');

const argentina =  {
    id: 'ARG',
    name: 'Argentina',
    flag: 'https://flagcdn.com/w320/ar.png',
    continent: 'South America',
    capital: 'Buenos Aires',
    subregion: 'South America',
    languages: "Guaraní",
    area: 2780400,
    population: 45376763,
    Activities: []
  }

describe('Grupo de test del Server', () => {
    it('Debe devolver status 200', async () => {
        const response = await request(server).get('/countries');
        expect( response.statusCode ).toBe(200)
    })
    it('Debe devolver con un objeto país', async() => {
        const response = await request(server).get('/countries/ARG');
        expect( JSON.parse(response.text) ).toEqual(argentina)
    })
});
