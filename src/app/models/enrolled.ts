export class Enrolled {
  _id?: number;
  name: string;
  lastName: string;
  birthDate: string;
  cellphone: number;
  cellule: string;
  annex: string;
  guest: string;

  constructor(name: string, lastName: string, birthDate: string,
    cellphone: number, cellule: string, annex: string, guest: string) {
      this.name = name;
      this.lastName = lastName;
      this.birthDate = birthDate;
      this.cellphone = cellphone;
      this.cellule = cellule;
      this.annex = annex;
      this.guest = guest;
    }
}
