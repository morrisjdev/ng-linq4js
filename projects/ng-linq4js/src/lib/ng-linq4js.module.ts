import 'linq4js';
import { NgModule } from '@angular/core';
import { WherePipe } from './pipes/where/where.pipe';
import { SelectPipe } from './pipes/select/select.pipe';
import { EvaluatePipe } from './pipes/evaluate/evaluate.pipe';
import { SelectManyPipe } from './pipes/select-many/select-many.pipe';
import { FindIndexPipe } from './pipes/find-index/find-index.pipe';
import { FindLastIndexPipe } from './pipes/find-last-index/find-last-index.pipe';
import { GetPipe } from './pipes/get/get.pipe';
import { RangePipe } from './pipes/range/range.pipe';
import { RepeatPipe } from './pipes/repeat/repeat.pipe';
import { CountPipe } from './pipes/count/count.pipe';
import { AllPipe } from './pipes/all/all.pipe';
import { AnyPipe } from './pipes/any/any.pipe';
import { FirstPipe } from './pipes/first/first.pipe';
import { SinglePipe } from './pipes/single/single.pipe';
import { LastPipe } from './pipes/last/last.pipe';
import { TakePipe } from './pipes/take/take.pipe';
import { SkipPipe } from './pipes/skip/skip.pipe';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';
import { OrderByDescendingPipe } from './pipes/order-by-descending/order-by-descending.pipe';
import { ThenByPipe } from './pipes/then-by/then-by.pipe';
import { ThenByDescendingPipe } from './pipes/then-by-descending/then-by-descending.pipe';
import { MinPipe } from './pipes/min/min.pipe';
import { MaxPipe } from './pipes/max/max.pipe';
import { GroupByPipe } from './pipes/group-by/group-by.pipe';
import { DistinctPipe } from './pipes/distinct/distinct.pipe';
import { ContainsPipe } from './pipes/contains/contains.pipe';
import { JoinPipe } from './pipes/join/join.pipe';
import { ReversePipe } from './pipes/reverse/reverse.pipe';
import { AveragePipe } from './pipes/average/average.pipe';
import { SumPipe } from './pipes/sum/sum.pipe';

const exports = [
  WherePipe,
  SelectPipe,
  EvaluatePipe,
  SelectManyPipe,
  FindIndexPipe,
  FindLastIndexPipe,
  GetPipe,
  RangePipe,
  RepeatPipe,
  CountPipe,
  AllPipe,
  AnyPipe,
  FirstPipe,
  SinglePipe,
  LastPipe,
  TakePipe,
  SkipPipe,
  OrderByPipe,
  OrderByDescendingPipe,
  ThenByPipe,
  ThenByDescendingPipe,
  MinPipe,
  MaxPipe,
  GroupByPipe,
  DistinctPipe,
  ContainsPipe,
  JoinPipe,
  ReversePipe,
  AveragePipe,
  SumPipe
];

@NgModule({
  declarations: [
    ...exports
  ],
  imports: [
  ],
  exports: [
    ...exports
  ]
})
export class NgLinq4jsModule { }
