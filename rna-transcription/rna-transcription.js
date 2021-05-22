

export const toRna = (secuencia) => {
  //Resultado
  
    let rna_secuencia = '';
  
    for (let i = 0; i < secuencia.length; i++) {
      if (secuencia[i] === 'C') {
        rna_secuencia += 'G';
      } else if (secuencia[i] === 'G') {
        rna_secuencia += 'C';
      } else if (secuencia[i] === 'A') {
        rna_secuencia += 'U';
      } else if (secuencia[i] === 'T') {
        rna_secuencia += 'A';
      }
    }
    return rna_secuencia;

};
