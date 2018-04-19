module.exports = [
  {
    type:    'input',
    name:    'name',
    message: 'Name:',
    validate(value) {
      if (!value.length) {
        return 'Application must have a name.';
      }

      return true;
    },
  },
  {
    type:    'input',
    name:    'message',
    message: 'Message:',
    validate(value) {
      if (!value.length) {
        return 'Application must have a message.';
      }

      return true;
    },
  },
  {
    type:    'input',
    name:    'version',
    message: 'Version:',
    validate(value) {
      if (!value.length) {
        return 'Application must have a version.';
      }

      return true;
    },
  },
];
