var yeoman = require('yeoman-generator')
  , StylusBoilerplateGenerator

StylusBoilerplateGenerator = yeoman.generators.Base.extend(
  { stylus: function () {
      this.directory('.', '.')
    }
  })

module.exports = StylusBoilerplateGenerator
