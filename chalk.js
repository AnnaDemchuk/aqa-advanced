import chalk from 'chalk';

const log = console.log;

// Combine styled and normal strings
console.log(chalk.blue('Hello'));
console.log(chalk.bgGreen('Hello Misha'));
console.log(chalk.blue.bgRed.bold('Hello world (bold)!'));
console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
