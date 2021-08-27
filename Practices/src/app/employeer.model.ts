export class Employee {
    name:string = "";
    lastname: string = "";
    position: string = "";
    salary: number = 0;

  constructor(name: string, lastname: string, position: string, salary: number) { //DEFINICON DE LOS PARAMETROS A RECIBIR POR EL CONSTRUCTOR, RESPETAR LA SINTAXIS!!!

    this.name = name;
    this.lastname = lastname;
    this.position = position;
    this.salary = salary;

  }


  /*
  public setName(name: string) {
    this.name = name;
  }

  public getName() {
    return this.name;
  }

  public toString() {

    return "Name : " + this.name;
  } */


}
