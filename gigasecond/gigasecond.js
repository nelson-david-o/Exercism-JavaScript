//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (second) => {
 
    var tiempo = second.getTime();
    var final = new Date(tiempo + 1000000000000);
    return final;
  
  
    
};
