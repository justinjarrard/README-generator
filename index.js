const inquirer = require('inquirer');
const fs = require('fs');
let results = []
// array of questions for user
const questions = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter a title for your proeject'
    }, {
      type: 'input',
      name: 'description',
      message: 'Breifly describe your project'
    }, {
      type: 'input',
      name: 'install',
      message: 'Please provide installation instructions'
    }, {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage instructions'
    }, {
      type: 'list',
      name: 'license',
      message: 'Choose a license you will be using',
      choices: [
        'Community',
        'MIT',
        'GNUGPL',
      ]
    }, {
      type: 'input',
      name: 'contributing',
      message: 'Please list any contributors to your project'
    }, {
      type: 'input',
      name: 'test',
      message: 'Please provide any testing instructions'
    }, {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address:'
    }, {
      type: 'input',
      name: 'github',
      message: 'Please provide your github ID:'
    }
  ])
    .then(data => {
      let body = `
# ${data.title}

![license](https://img.shields.io/badge/readmegen-${data.license}-brightgreen)

## Description
  ${data.description}

## Table of Contents:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
    
## Installation
  ${data.install}

## Usage
  ${data.usage}

## License
  ${data.license}

## Contributing
  ${data.contributing}

## Tests
  ${data.test}

## Questions
  For questions regarding the application please contact me at:
  [My Github](https://github.com/${data.github})
  [Email Me!](mailto:${data.email})
  
        `

      fs.writeFile('NEWREADME.md', body, err => {
        if (err) console.log(err)
      })
      if (data.license === 'MIT') {
        fs.appendFile('NEWREADME.md', '[mitLicense](https://mit-license.org/)', err => {
          if (err) { console.log(err) }
        })
      } else if (data.license === 'GNUGPL') {
        fs.appendFile('NEWREADME.md', '[gnuLicense](http://gnugpl.org/)', err => {
          if (err) { console.log(err) }
        })
      } else {
        fs.appendFile('README.md', 'This is a community License')
      }
    })

    .catch(err => console.log(err))
}

questions()

