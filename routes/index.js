['account','api','auth'].forEach(function(inc) {
  module.exports[inc] = require('./' + inc);
});
