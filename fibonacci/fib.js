function fibs(num) {
  let fibArray = [];
  let n1 = 0;
  let n2 = 1;
  if (num==0) {return "Not a valid position"};
  for (n=0;n<num;n++) {
    fibArray.push(n1);
    let nextNum = n1+n2;
    n1 = n2;
    n2 = nextNum;
  };
  return fibArray;
};