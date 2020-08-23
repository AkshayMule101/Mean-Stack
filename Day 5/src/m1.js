//Importimg the module


let Person = require('./person')

let Employee = require('./Employee')


class Main {
  static main() {
    console.log("this is manchester united")

    let p = new Person();

    let op = p.getName();

    let e = new Employee();

    let op1 = e.hello();

    console.log(op);
    console.log(op1);
  }
}


Main.main();  