const chalk = require('chalk');
const figlet = require('figlet');

const printHeading = () => {
  console.log(
    chalk.cyan(
      figlet.textSync('Activepipe', {
        font: 'Standard',
        horizontalLayout: 'full',
        verticalLayout: 'default'
      })
    )
  );
};

const printInstructions = () => {
  console.log(chalk.green('\nActivepipe Coding Challenge'));
  console.log(chalk.green('---------------------------------------------------\n'));
  console.log(chalk.white('PLACE X, Y, F\nMOVE\nLEFT\nRIGHT\nREPORT\n'));
  console.log(chalk.green('Type "REPORT" to see the current coordinates of your robot\n'));
  console.log(chalk.green('Press CTRL+C (for Windows) or Command+C (for Mac) to exit program\n'));
};

module.exports = { printHeading, printInstructions };