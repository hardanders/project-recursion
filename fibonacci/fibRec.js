function fibsRec(num) {
    if (num < 1 || num === NaN) {return "Not a valid position"};
    
    if (num === 1) {return [0]};
    if (num === 2) {return [0,1]};
  
    return [...fibsRec(num-1), fibsRec(num-1)[num-2] + fibsRec(num-1)[num-3]];
  };