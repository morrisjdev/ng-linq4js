import { Component } from '@angular/core';
import * as faker from 'faker';
import {Observable, timer} from 'rxjs';
import {map} from 'rxjs/operators';
import {Where, Select} from 'ng-linq4js';
import {OrderBy} from '../../projects/ng-linq4js/src/lib/rxjs-extensions/operators';

interface DemoUser {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  street: string;
  pets: string[];
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  testArray: DemoUser[];

  testArray$: Observable<number[]>;

  constructor() {
    this.testArray = new Array(50).Select(v => this.createFake());

    const base$ = timer(0, 1000).pipe(map(() => {
      return new Array(5).Select(v => this.createFake());
    }));

    this.testArray$ = base$.pipe(Select(x => x.age), OrderBy(x => x));
  }

  private createFake(): DemoUser {
    const petCount = faker.random.number({
      min: 0,
      max: 7
    });

    return {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      phone: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      street: faker.address.streetAddress(),
      age: faker.random.number({
        min: 5,
        max: 90
      }),
      pets: new Array(petCount).Select(v => faker.name.firstName())
    };
  }

  public anyPetsFilter = (x: DemoUser) => x.pets.Any();
}
