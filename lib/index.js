
module.exports.init = function(argv) {
  const fs = require('fs');

  const config = {
    manifest: '../package.json',
  };
  
  //if (typeof(argv(config).manifest) === 'string') {
    //if (require(argv(config).manifest)) {
     // console.log(argv(config).manifest);
     // console.log('ok');
    //}
    // console.log(argv(config).manifest);
    // const manifest = require(argv(config).manifest);
    // if (manifest) {
    //   console.log(manifest);
    // }
  //}
  if (typeof(argv(config).manifest) === 'string') {
    console.log(argv(config).manifest);
    console.log('ok');
    fs.access(argv(config).manifest, fs.constants.F_OK, (err) => {
      if (err) {
        console.log('can\'t read!');
      } else {
        const manifest = require(argv(config).manifest);
        if (manifest && typeof(manifest) === 'object') {
          console.log(manifest);
        } else {
          console.log(`${argv(config).manifest} is not an Object`);
        }
      } 
    });
  } else {
    console.log(argv(config).manifest);
    console.log('value manquante');
    // TODO display help
  }
};