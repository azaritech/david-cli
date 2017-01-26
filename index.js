const david = require('david');
const chalk = require('chalk');
//const R = require('ramda');
const argv = require('process.argv')(process.argv.slice(2));

const config = {
  manifest: './package.json',
};

console.log(argv(config).manifest);
const manifest = require(argv(config).manifest);

if (manifest) {
  david.getDependencies(manifest, function (er, deps) {
    console.log('');
    console.log('--- latest dependencies ---');
    console.log('latest dependencies information for', manifest.name);
    listDependencies(deps);
  });
  
  david.getDependencies(manifest, { dev: true }, function (er, deps) {
    console.log('');
    console.log('--- dev dependencies ---');
    console.log('latest devDependencies information for', manifest.name);
    listDependencies(deps);
  });
}

if (recursive)
function cmpDependencies(current, stable) {
  if (current === stable) {
    return 'Green';
  } else {
    return 'Red';
  }
}

function widthColumn(name) {

}

function listDependencies(deps) {
  Object.keys(deps).forEach(function(depName) {
    const current = deps[depName].required || '*';
    const stable = deps[depName].stable || 'None';
    const latest = deps[depName].latest;
    console.log('%s: \tCurrent: %s \tStable: %s \tLatest: %s',
      depName,
      chalk.yellow['bg' + cmpDependencies(current, stable)](current),
      chalk.black.bgGreen(stable),
      chalk.black.bgGreen(latest)
    );
  });
}

