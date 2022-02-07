import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  persons = ['Art', 'Kate', 'Arina', 'Nazar'];

  constructor() {
  }

  addPerson(name: string) {
    this.persons.push(name);
    console.log(this.persons);
  }

  removePerson(name: string) {
    this.persons = this.persons.filter(person => person != name);
    console.log(this.persons);
  }

}
