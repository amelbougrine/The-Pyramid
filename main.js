console.log("Hi, welcome to my super pyramid! How many floors do you want? (type a number between 1 and 25).");
var number = prompt("Type a number between 1 and 25 to build a super pyramid!");
while (number > 25 || number < 1) {
  number = prompt("Type a number between 1 and 25 to build a super pyramid!");
}
console.log(number);
var count = number-1;
var array = [];
for (var i = 0; i < number; i++) {
  // console.log("%c" + i, "color: red;");
  array = [];
  count = count + 1;
  for (var j = 1; j <= count ; j++) {
    // console.log(j);
    var count2 = number-i ;
    if (j >= count2) {
      array.push("#");
    } else {
      array.push(" ");
    }
  }
  // console.log(array);
  var string = array.toString();
  var finalString = string.replace(/,/g, "");
  console.log(finalString);
}

