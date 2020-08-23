class cal {

  add(n1, n2) {
    return n1 + n2;
  }

  sub(n1, n2) {
    return n1 - n2;
  }

  mul(n1, n2) {
    return n1 * n2;
  }

  div(n1, n2) {
    return n1 / n2;
  }
}

//let a = cal.add(1, 2);

//console.log(a);


//this abv two lines will give us error bec we r not  created obj of class

let a = new cal(); // we are creating obj by using new keyword

var op = a.add(1, 2);

console.log(op);

var opp = a.sub(1, 2);

console.log(opp);

var o = a.mul(1, 2);

console.log(o);


var p = a.div(1, 2);

console.log("div=", p);


