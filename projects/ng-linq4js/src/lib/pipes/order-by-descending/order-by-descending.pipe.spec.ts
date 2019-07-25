import { OrderByDescendingPipe } from './order-by-descending.pipe';

describe('OrderByDescendingPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByDescendingPipe();
    expect(pipe).toBeTruthy();
  });
});
