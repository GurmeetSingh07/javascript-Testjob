var arr = [
  "apple",
  "banana",
  "orange",
  "pineapple",
  "grapes",
  "avacado",
  "strawberry",
];
var arr2 = ["grapes", "cabbage", "tomato", "banana", "orange"];
var arr3 = [];
for (var i = 0; i < arr.length; i++) {
  for (j = 0; j <= arr2.length; j++) {
    if (arr[i] == arr2[j]) {
      arr3.push(arr[i]);
    }
  }
}
console.log(arr3);
