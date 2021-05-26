//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (number) => {
  number = number.match(/[a-z0-9@:!]/gi).join('');
  
  if (number.match(/[@:!]/g)){
	  throw 'Punctuations not permitted';
  }else if (number.match(/[a-z]/gi)){
	  throw 'Letters not permitted';
  }else if (number.length < 10){
	  throw 'Incorrect number of digits';
  }else if (number.length > 11){
	  throw 'More than 11 digits';
  }else if (number.length === 11 && number[0] != 1){
	  throw '11 digits must start with 1';
  }else if (number)
  
  if (number.length === 11){
  	number = number.slice(1, 11)
  }
  
  if (number[0] == 0){
	  throw 'Area code cannot start with zero';
  }else if (number[0] == 1){
	  throw 'Area code cannot start with one';
  }else if (number[3] == 0){
	  throw 'Exchange code cannot start with zero';
  }else if (number[3] == 1){
	  throw 'Exchange code cannot start with one';
  }
  return number;
};
