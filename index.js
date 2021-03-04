const inquirer = require('inquirer');
const fs = require('fs');
let results = []

// array of questions for user
const questions = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter a title for your proeject:'
    }, {
      type: 'input',
      name: 'description',
      message: 'Breifly describe your project:'
    }, {
      type: 'input',
      name: 'contents',
      message: 'Table of Contents:'
    }, {
      type: 'input',
      name: 'install',
      message: 'Please provide installation instructions:'
    }, {
      type: 'list',
      name: 'license',
      message: 'Please select one of these licenses:',
      choices: [
        'badge one',
        'badge two',
        'badge three',
        'badge four'
      ]
    }, {
      type: 'input',
      name: 'contributing',
      message: 'Please list any contributors to your project:'
    }, {
      type: 'email',
      name: 'email',
      message: 'Please enter your email address:'
    }, {
      type: 'input',
      name: 'github',
      message: 'Please provide your github ID:'
    }
  ])
    .then(data => {
      console.log(data)
      // results.push(data)
      // questions.push(res)
      // questions()
    })

  // fs.writeFile(README.md, JSON.stringify(data), err => {
  //   if (err) console.log(err)
  // })

    .catch(err => console.log(err))
}

questions()