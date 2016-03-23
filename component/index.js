'use strict';

var generator = require('yeoman-generator');

module.exports = generator.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generator.Base.apply(this, arguments);

    // Next, add your custom code
    this.option('jsx'); // This method adds support for a `--coffee` flag
  }
});
