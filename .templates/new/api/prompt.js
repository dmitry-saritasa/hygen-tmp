const _ = require('lodash');
const utils =  require('../../utils.js');

module.exports = [
  {
    type:    'input',
    name:    'name',
    message: 'API Method Name:',
    validate(value) {
      if (!value.length) {
        return 'API method must have a name.';
      }
      return true;
    },
  },
  {
    type:    'input',
    name:    'url',
    message: 'API Method URL:',
    validate(value) {
      if (!value.length) {
        return 'API method must have an URL.';
      }
      return true;
    },
  },
  {
    type:    'checkbox',
    name:    'appname',
    message: 'App:',
    choices: utils.getDirectories('src/apps'),
  },
  {
    type:    'checkbox',
    name:    'method',
    message: 'HTTP method:',
    choices: [
      {
        name:    'GET',
        value:   'get',
        default: true,
      },
      {
        name:    'POST',
        value:   'post',
        default: false,
      },
      {
        name:    'PUT',
        value:   'put',
        default: false,
      },
      {
        name:    'DELETE',
        value:   'delete',
        default: false,
      },
    ],
  },
  {
    type:    'input',
    name:    'params',
    message: 'Params (separated by ,):',
  },
];
