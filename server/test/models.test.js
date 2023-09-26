const { Country, conn } = require('../src/db');

describe('Country Model', () => {
  beforeAll(async () => {
    await conn.sync({ force: true });
  });

  afterAll(async () => {
    await conn.close();
  });

  it('Debe crear una nueva instancia del modelo', async () => {
    const newCountry = await Country.create({
      id: 'KAM',
      name: 'Kamchatka',
      flag: 'kam-flag.png',
      continent: 'Asia',
      capital: 'Kam',
      subregion: 'Mountain Region',
      area: 114.67,
      population: 2891,
    });
    expect(newCountry.id).toBe('KAM');
    expect(newCountry.name).toBe('Kamchatka');
    expect(newCountry.flag).toBe('kam-flag.png');
  });
  it('Debe controlar los atributos del modelo', () => {
    const attributes = Country.rawAttributes;
    expect(attributes.id).toBeDefined();
    expect(attributes.name).toBeDefined();
    expect(attributes.flag).toBeDefined();
    expect(attributes.continent).toBeDefined();
    expect(attributes.capital).toBeDefined();
    expect(attributes.subregion).toBeDefined();
    expect(attributes.area).toBeDefined();
    expect(attributes.population).toBeDefined();
  });
});
