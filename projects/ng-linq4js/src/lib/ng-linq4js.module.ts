import 'linq4js';
import {NgModule} from '@angular/core';
import { QWherePipe } from './pipes/where/q-where.pipe';

const exports = [
  QWherePipe
];

@NgModule({
  declarations: [
    ...exports,

  ],
  imports: [
  ],
  exports: [
    ...exports
  ]
})
export class NgLinq4jsModule { }
