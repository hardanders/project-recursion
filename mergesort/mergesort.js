function mergesortNew(arr) {
  if (arr.length === 0) {return 'Please enter a valid array!'};
  if (arr.length === 1) {return arr};

  let slicePoint = Math.floor(arr.length/2);
  let leftArr = arr.slice(0, slicePoint);
  let rightArr = arr.slice(slicePoint);

  return mergeArray(mergesortNew(leftArr), mergesortNew(rightArr));
};

function mergeArray(left = [], right = []) {
  let resultArr = [];

  while (left.length > 0 || right.length > 0) {
    if (left[0] === right[0]) {
      resultArr.push(left.shift());
    } else if (right[0] === undefined) {
      resultArr.push(left.shift());
    } else if (left[0] === undefined) {
      resultArr.push(right.shift());
    } else if (left[0] < right[0]) {
      resultArr.push(left.shift());
    } else if (right[0] < left[0]){
      resultArr.push(right.shift());
    };
  };
  return resultArr;
};