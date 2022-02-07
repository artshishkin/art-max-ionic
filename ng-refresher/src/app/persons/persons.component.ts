import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";

import {PersonsService} from "./persons.service";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit, OnDestroy {

  isFetching: boolean = false;

  personList: string[] = [];

  private subs: Subscription[] = [];

  constructor(private personsService: PersonsService) {
  }

  ngOnInit(): void {
    let subscription = this.personsService.persons$.subscribe(persons => {
      this.personList = persons;
      this.isFetching = false;
    });
    this.subs.push(subscription);
    this.isFetching = true;
    this.personsService.fetchPersons();
  }

  onRemovePerson(name: string) {
    this.personsService.removePerson(name);
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
