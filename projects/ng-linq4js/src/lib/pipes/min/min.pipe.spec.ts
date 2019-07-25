import { MinPipe } from './min.pipe';

describe('MinPipe', () => {
  it('create an instance', () => {
    const pipe = new MinPipe();
    expect(pipe).toBeTruthy();
  });
});
