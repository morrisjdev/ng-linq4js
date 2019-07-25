import { AnyPipe } from './any.pipe';

describe('AnyPipe', () => {
  it('create an instance', () => {
    const pipe = new AnyPipe();
    expect(pipe).toBeTruthy();
  });
});
