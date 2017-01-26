
module.exports.init = function(argv) {
  const config = {
    manifest: './package.json',
  };
  console.log(argv(config).manifest);
};