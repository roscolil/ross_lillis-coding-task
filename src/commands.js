const chalk = require('chalk');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let name

const getName = () => {
  setTimeout(() => {
    console.log('Are you ready to play?\n')
    setTimeout(() => {
      console.log('Great!\n')
      setTimeout(() => {
        rl.question('Please provide a name for your robot: ', (res) => {
          console.log(`\nNice work ${res}!\n`)
          console.log(chalk.green('Now enter each command on a new line, starting with PLACE:\n'))
          name = res.toString().toUpperCase().trim()
        })
      }, 2000)
    }, 2000)
  }, 1000)
}


module.exports = { getName }