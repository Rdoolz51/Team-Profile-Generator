const Manager = require('../lib/Manager.js');

test('creates an Manager object', () => {
    const manager = new Manager('David', 3, 'Rdoolz51@aol.com', 14);

    expect(manager.name).toBe('David');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNum).toEqual(expect.any(Number));

});