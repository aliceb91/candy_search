const searchCandies = require('./searchCandies')

describe('searchCandies', () => {
    it('returns Mars and Maltesers for a search string of Ma and a price of 10', () => {
        expect(searchCandies("Ma", 10)).toEqual(["Mars", "Maltesers"]);
    });
    it('returns Mars when given a search string Ma and a price of 2', ()=> {
        expect(searchCandies("Ma", 2)).toEqual(["Mars"]);
    });
    it('returns Skitties, Skittles and Starburst for a search string of S and a price of 10', () => {
        expect(searchCandies("S", 10)).toEqual(["Skitties", "Skittles", "Starburst"]);
    });
    it('returns Skitties and Skittles for a search string of S and a price of 4', () => {
        expect(searchCandies("S", 4)).toEqual(["Skitties", "Skittles"]);
    });
});
