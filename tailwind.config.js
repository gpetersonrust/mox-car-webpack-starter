const plugin = require('tailwindcss/plugin');
const find_files_recursively = require('./library/utilities/find_files_recursively');
//  php_files
const { file_path } = require('./library/constants/global');
let php_files = find_files_recursively(file_path, [], 'node_modules|dist|.git', '.php$|.html$', []);

 

module.exports = {
  mode: 'jit',

  content: php_files,

  theme: {
    extend: {
      colors: {
        app: {
          primary: '#f91942',
          ['primary-light']: '#ff395d',
          light: '#5c5c5c',
          secondary: '#f919420f',
          tertiary: '#FCB316',
          confirm: '#54ba1d',
          raven: '#333333cc;',
          dark: '#1b1b1b',
          ['light-grey']: '#fafafa',
        },
      },
    },
  },
  important: true,
};
