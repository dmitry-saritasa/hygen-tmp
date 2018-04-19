// my-generator/my-action/index.js
module.exports = {
  prompt: ({ inquirer, args }) =>
    inquirer
      .prompt({
        type: 'input',
        name: 'email',
        message: "What's your email?"
      })
      .then(({ email }) =>
        inquirer.prompt({
          type: 'input',
          name: 'emailConfirmation',
          message: `Please type your email [${email}] again:`
        })
      )
}
