var arr1 = [1, 3, 6, 2, 4, 3, 1];
var arr2 = [2, 0, 4, 1, 2, 3, 2];
var sum = [];
var final = [];

for (var i = 0; i < arr1.length; i++) {
  sum.push(arr1[i] + arr2[i]);
}

sum.forEach(function (item) {
  if (final.indexOf(item) < 0) {
    final.push(item);
  }
});
console.log(final);
