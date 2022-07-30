const Intern = require('../lib/Intern.js');

test('creates an Intern object', () => {
    const intern = new Intern('David', 3, 'Rdoolz51@aol.com', 'Blank University');

    expect(intern.name).toBe('David');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));

});