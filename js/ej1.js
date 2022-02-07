let arr = [9,2,6,1,4,3,8,7];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - 1; j++) {  
    if(arr[j] > arr[j + 1]) {
      const num = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = num;
    };
  };
};
console.log(arr);