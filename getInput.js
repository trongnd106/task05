const readline = require("readline/promises")

const getInput = async (message) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const input = await rl.question(message);

  rl.close()
  return input
};

module.exports = getInput
// export default getInput