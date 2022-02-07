import {Injectable} from '@angular/core';
import {BehaviorSubject, map} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  private persons = [];
  persons$ = new BehaviorSubject<string[]>(this.persons);

  constructor(private httpClient: HttpClient) {
  }

  fetchPersons() {
    this.httpClient
      .get<any>('https://swapi.dev/api/people')
      .pipe(map(response => response.results.map(character => character.name)))
      .subscribe(charactersNames => {
        this.persons = charactersNames;
        this.persons$.next(charactersNames);
      });
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
