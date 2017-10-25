var argv = require('yargs')
.option('size', {
  alias: 's',
  describe: 'choose a size',
  choices: ['xs', 's', 'm', 'l', 'xl'],
  string : true
})
.argv
console.log(argv);
