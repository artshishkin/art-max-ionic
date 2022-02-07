import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  private persons = ['Art', 'Kate', 'Arina', 'Nazar'];
  persons$ = new BehaviorSubject<string[]>(this.persons);

  constructor() {
  }

  addPerson(name: string) {
    this.persons.push(name);
    this.persons$.next(this.persons);
  }

  removePerson(name: string) {
    this.persons = this.persons.filter(person => person != name);
    this.persons$.next(this.persons);
  }

}
