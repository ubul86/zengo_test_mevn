const cityService = require('../../../services/city.service');

jest.mock('../../../models/city.model', () => ({
    find: jest.fn().mockReturnValue({
        populate: jest.fn().mockResolvedValue([
            {
                _id: '1',
                name: 'Sample City',
                county: { name: 'Sample County' }
            }
        ])
    })
}));

describe('CityService', () => {
    it('should return a list of cities', async () => {
        const query = {};
        const result = await cityService.getAllCities(query);

        expect(result).toEqual([
            {
                _id: '1',
                name: 'Sample City',
                county: {
                    name: 'Sample County'
                }
            }
        ]);

        const cityData = { _id: '1', name: 'Sample City', county: { name: 'Sample County' } };
        expect(cityData).toEqual(result[0]);
    });
});
