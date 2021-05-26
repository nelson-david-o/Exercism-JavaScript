

export const findAnagrams = (anagram, words) => {
  let vector = [];
  let w = anagram.toLowerCase();

  vector = words.filter(x => (x.toLowerCase() != w) && (x.length == w.length));

  w = w.split('');
  w.sort();

  vector = vector.filter(x => {
    x = x.toLowerCase();
    x = x.split('');
    x.sort();

    for (let i = 0; i < w.length; i++) {
      if (x[i] != w[i]) {
        return false;
      }
    }

    return true;
  });

  return vector;
};
