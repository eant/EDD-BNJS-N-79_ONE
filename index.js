const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('ingrese un nro ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`ud ingreso: ${answer}`);

  rl.close();
});