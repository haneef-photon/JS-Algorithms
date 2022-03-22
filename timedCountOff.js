/*
Timed Count Off

Instructions:
We are given some code below. What will it print out?

How can we get this code to print out
the numbers 1 - 5 instead of repeatedly
printing the number 6?

*/
function timedCountOff() {
  for (var i = 1; i <= 5; i++) {
    var time = i * 1000;

    setTimeout(function () {
      console.log(i);
    }, time);
  }
  console.log("Outside of loop:", i);
}

timedCountOff();
setTimeout(function timedCountOff1() {
  for (var i = 1; i <= 5; i++) {
    var time = i * 1000;
    // scope the variable j
    {
      let j = i;
      setTimeout(function () {
        console.log(j);
      }, time);
    }
  }
}, 5500);

setTimeout(function timedCountOff2() {
    // use let instead
    for (let i = 1; i <= 5; i++) {
      var time = i * 1000;
        setTimeout(function () {
          console.log(i);
        }, time);
    }
  }, 10500);
  