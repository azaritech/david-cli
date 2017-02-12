'use strict';

const david             = require('david');
const { isNpmPackage }  = require('is-npm-package.json');
const chalk             = require('chalk');

module.exports.init = function(argv) {
  console.log(argv);

  if (argv.package) {
    console.log(argv.package);
    const path = argv.package.trim();
    console.log(path);
    const manifest = isNpmPackage(path);
    if (manifest && manifest.valid) {
      david.getDependencies(manifest.message, function (er, deps) {
        console.log('');
        console.log('--- latest dependencies ---');
        console.log('latest dependencies information for', manifest.message.name);
        listDependencies(deps);   
      });
    }
  }

  if (argv.packages) {
    const paths = argv.packages.trim().replace(' ', '').split(',');
    let i = 0;
    while (i < paths.length) {
      const manifest = isNpmPackage(paths[i]);
      if (manifest && manifest.valid) {
        david.getDependencies(manifest.message, function (er, deps) {
          console.log('');
          console.log('--- latest dependencies ---');
          console.log('latest dependencies information for', manifest.message.name);
          listDependencies(deps);
        });        
      }
      i++;
    }
  }

  if (argv.json) {
    console.log(argv.json);
  }

  if (argv.html) {
    console.log(argv.html);
  }
  
  if (argv.cli) {
    console.log(argv.cli);
  }

  function cmpDependencies(current, stable) {
    if (current === stable) {
      return 'Green';
    } else {
      return 'Red';
    }
  }

  function listDependencies(deps) {
    Object.keys(deps).forEach(function(depName) {
      const required = deps[depName].required || '*';
      const stable = deps[depName].stable || 'None';
      const latest = deps[depName].latest;
      console.log(`- ${depName}`);
      console.log(' Required: %s \tStable: %s \tLatest: %s',
        chalk.yellow['bg' + cmpDependencies(required, stable)](required),
        chalk.black.bgGreen(stable),
        chalk.black.bgGreen(latest)
      );
      console.log('');
    });
  }
  
};