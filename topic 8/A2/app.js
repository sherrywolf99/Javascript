const unordered = {
    'b': 'foo',
    'c': 'bar',
    'a': 'baz'
  };
  
  console.log(JSON.stringify(unordered));
  // → '{"b":"foo","c":"bar","a":"baz"}'
  
  const ordered = {};
  Object.keys(unordered).sort().forEach(function(key) {
    ordered[key] = unordered[key];
  });
  
  console.log(JSON.stringify(ordered));
  