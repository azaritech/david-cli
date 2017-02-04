'use strict';

module.exports.init = function(argv) {
  const fs = require('fs');
  const path = require('path');

  const config = {
    package: './package.json',
  };
  
  if (typeof(argv(config).package) === 'string') {
    console.log(argv(config).package);
    console.log('ok');
    fs.access(argv(config).package, fs.constants.F_OK, (err) => {
      if (err) {
        console.log(`Can't read this path/file`);
      } else {
        let package = {};
        try {
          console.log(path.resolve(argv(config).package));
          package = require(path.resolve(argv(config).package));
        }
        catch(err) {
          console.log(`'${argv(config).manifest}' is not a JSON file`);
        }
        if (package && typeof(package) === 'object') {
          console.log(package);
        } else {
          console.log(`'${argv(config).manifest}' is not an Object`);
        }
      } 
    });
  } else {
    console.log(argv(config).package);
    console.log('value manquante');
    // TODO display help
  }
};