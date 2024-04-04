export class Enrolled {
  _id?: number;
  name: string;
  lastName: string;
  birthDate: string;
  age: number;
  cellphone: number;
  cellule: string;
  annex: string;
  guest: string;
  busNumber: number;

  constructor(name: string, lastName: string, birthDate: string, age: number,
    cellphone: number, cellule: string, annex: string, guest: string, busNumber: number) {
    this.name = name;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.age = age;
    this.cellphone = cellphone;
    this.cellule = cellule;
    this.annex = annex;
    this.guest = guest;
    this.busNumber = busNumber;
  }
}
