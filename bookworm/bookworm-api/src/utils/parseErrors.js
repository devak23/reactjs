import _ from 'lodash';

export default function(errors) {
  const results = {};

  _.forEach(errors, (value, key) => {
    results[key] = value.message;
  });

  return results;
}
