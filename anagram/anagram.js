

export const findAnagrams = (valores, lista) => {
  let anagrams = [];
  let compare = valores.toLowerCase().split("").sort().join();
  for (let i = 0; i < lista.length; i++) {
    if(lista[i].toLowerCase().split("").sort().join() == compare && 
    lista[i].toLowerCase() != valores.toLowerCase()){
      anagrams.push(lista[i]);
    }
  }
  return anagrams;
};
