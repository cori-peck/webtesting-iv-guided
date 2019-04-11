const db = require('../data/dbConfig');
const Hobbits = require('./hobbitsModel');

//returns 201
//inert the hobbit

describe('hobbits model', () => {
    describe('insert()', () => {
        beforeEach( async () => {
            await db('hobbits').truncate();
        })


        it('should insert the provided hobbits', async () => {
            await Hobbits.insert({name: 'gaffer' });

            const hobbits = await db('hobbits')
            expect(hobbits).toHaveLength(1);
        })

        it('should insert the provided hobbit', async () => {
            let hobbit = await Hobbits.insert({ name: 'gaffer'})
            expect(hobbit.name).toBe('gaffer');

            hobbit = await Hobbits.insert({ name: 'sam'});
            expect(hobbit.name).toBe('sam');
        })
    })
})