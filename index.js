const { prompt } = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?"
    },

    {
        type: 'input',
        name: 'id',
        message: "What is the manager's Employee ID Number?"
    },

    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email address?"
    },

    {
        type: 'input',
        name: 'officeNum',
        message: "What is the manager's office number?"
    }
];

const menuList = [
    {
        type: 'list',
        name: 'addTeamMember',
        message: 'What would you like to do next?',
        choices: ['Add Engineer', 'Add Intern', 'Finish Building Team']
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: "What is the engineer's name?"
    },

    {
        type: 'input',
        name: 'engineerId',
        message: "What is the engineer's Employee ID Number?"
    },

    {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the engineer's email address?"
    },

    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's github username?"
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: "What is the intern's name?"
    },

    {
        type: 'input',
        name: 'internId',
        message: "What is the intern's Employee ID Number?"
    },

    {
        type: 'input',
        name: 'internEmail',
        message: "What is the intern's email address?"
    },

    {
        type: 'input',
        name: 'school',
        message: "What school does the Intern attend?"
    }
];

async function manager () {
    const managerAnswers = await prompt(managerQuestions);
    const { name, id, email, officeNum } = managerAnswers;
    let manager = new Manager(name, id, email, officeNum);
    team.push(manager);
    main();
}
async function createEngineer () {
    const engineerAnswers = await prompt(engineerQuestions);
    const { engineerName, engineerId, engineerEmail, github } = engineerAnswers;
    let engineer = new Engineer(engineerName, engineerId, engineerEmail, github);
    team.push(engineer);
    main();
}
async function createIntern () {
    const internAnswers = await prompt(internQuestions);
    const { internName, internId, internEmail, school } = internAnswers;
    let intern = new Intern(internName, internId, internEmail, school);
    team.push(intern);
    main();


}
async function main () {
    const nextAction = await prompt(menuList);
    const { addTeamMember } = nextAction;

    if (addTeamMember === 'Add Engineer') {
        await createEngineer();
    } else if (addTeamMember === 'Add Intern') {
        await createIntern();
    } else if (addTeamMember === 'Finish Building Team') {
        console.log('All Done! Here is your team!' + (JSON.stringify(team)));
    }
}
manager();

module.exports = team;