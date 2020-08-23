//notes by santosh sir
/*
* Data Members - we dont hv to define members explicitly

* Constructor - it's a special member function by we can initialize the obj
in js we cnt initailize or create constru with class name while creatinh obj.here in js we are using kw constructor

*/


class Person {

  //constructor
  constructor() {
    console.log("this is constructor");
  }

  // member function or normal fn    we can call normal fn and static 

  //we hv to create mfn using dot operator
  getPersonName() {
    return "I am Dan";
  }

  // static member fn we dont need obj to call static fn 
  // we call static fn by class-name_methodname 
  static main() {


    let p = new Person// obj created to acess nmf non mf
    const n = p.getPersonName();

    console.log(n);

    //console.log(p);//we can't call static mfn inside statice member fn because there family is not same



  }
}

Person.main()