class calculator {

  add(n1, n2) {
    return n1 + n2;

  }

  sub(n1, n2) {
    return n1 - n2;
  }


  //execution usig static

  static main() {
    let obj1 = new calculator();

    let result1 = obj1.add(1, 2);


    console.log(result1);


    let obj2 = new calculator();

    let result2 = obj1.sub(1, 2);



    console.log(result2);


  }

}

calculator.main();