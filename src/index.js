/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  for (var i = 1; i < preferences.length+1; i++) {
    if (!preferences.includes(i)) {
      preferences[i-1] = 0;
    }
  }

  let ind = 1;
  let res = 0;
  
  while (ind <= preferences.length) {
    while(preferences[ind - 1] === 0 && ind <= preferences.length) {
      ind = ind + 1;
    }
    
    let first = preferences[ind-1];
    let second = preferences[first-1];
    let third = preferences[second-1];

    if (third === ind && ind !== first) {
      res = res + 1;
      preferences[first - 1] = 0;
      preferences[second - 1] = 0;
      preferences[third - 1] = 0;
      while (preferences[ind - 1] === 0 && ind <= preferences.length) {
        ind = ind + 1;
      }
    }
    else {
      ind = ind + 1;
    }
  }
  return res;
};
