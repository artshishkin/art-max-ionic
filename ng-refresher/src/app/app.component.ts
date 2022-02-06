import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-refresher';

  persons = ['Art', 'Kate', 'Arina', 'Nazar'];

  onPersonCreated(name: string) {
    this.persons.push(name);
  }
}
