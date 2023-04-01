// Main menu and action handling
const inquirer = require('inquirer');
const inquirerPrompts = require('./Prompts/inquirerprompts');
const queries = require ('./queries');
const dbConnection = require('./db');

const mainMenuHandler = function () {
    let response = await inquirer.prompt(inquirerPrompts.userAction);


switch (action) {
    case
        return ;
    case
        return ;
    case
        return ;
    case
        return ;
    case
        return ;
    case
        return ;
    case 'Exit':
        return closeApp;
}
}
// Close database connection
const closeApp = function () {
    console.log('Thank you for using our app. Goodbye!')
    connection.end();
} 