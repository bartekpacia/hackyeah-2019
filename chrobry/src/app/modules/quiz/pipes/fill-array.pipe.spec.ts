import { FillArrayPipe } from './fill-array.pipe';

describe('FillArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new FillArrayPipe();
    expect(pipe).toBeTruthy();
  });

  it('return and array with x numbers', () => {
    const pipe = new FillArrayPipe().transform(6);
    expect(pipe.length).toBe(6);
  });

  it('should fill array with numbers', () => {
    const pipe = new FillArrayPipe().transform(6);
    expect(pipe[0]).toBe(1);
    expect(pipe[5]).toBe(6);
  });
});
