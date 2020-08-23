//santosh sir approach

class calculator {

  add(n1, n2) {
    return n1 + n2;

  }

  sub(n1, n2) {
    return n1 - n2;
  }


  //execution usig static

  static main() {
    let obj = new calculator();

    let op = obj.add(1, 2); // parameter passing
    console.log(op);


    let obj1 = new calculator();

    let opp = obj1.sub(1, 2); // parameter passing



    console.log(opp);


  }

}

calculator.main();