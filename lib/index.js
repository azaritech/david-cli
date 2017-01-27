
module.exports.init = function(argv) {
  const fs = require('fs');
  const path = require('path');

  const config = {
    manifest: '../package.json',
  };
  
  if (typeof(argv(config).manifest) === 'string') {
    console.log(argv(config).manifest);
    console.log('ok');
    fs.access(argv(config).manifest, fs.constants.F_OK, (err) => {
      if (err) {
        console.log(`Can't read this path/file`);
      } else {
        let manifest = {};
        try {
          console.log(path.resolve(argv(config).manifest));
          manifest = require(path.resolve(argv(config).manifest));
        }
        catch(err) {
          console.log(`'${argv(config).manifest}' is not a JSON file`);
        }
        if (manifest && typeof(manifest) === 'object') {
          console.log(manifest);
        } else {
          console.log(`'${argv(config).manifest}' is not an Object`);
        }
      } 
    });
  } else {
    console.log(argv(config).manifest);
    console.log('value manquante');
    // TODO display help
  }
};