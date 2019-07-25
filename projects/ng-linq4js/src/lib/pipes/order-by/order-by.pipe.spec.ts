import { OrderByPipe } from './order-by.pipe';

describe('OrderByDescendingPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });
});
