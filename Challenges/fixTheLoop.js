var values = ["A", "B", "C", "D", "E"];
var myfunctions = [];

for (var i = 0; i < values.length; i++) {
  myfunctions.push((function () {
    console.log(values[i]);
  })(i));
}

for (var j = 0; j < values.length; j++) {
  myfunctions[j];
}
