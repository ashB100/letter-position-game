import { throwIfAlreadyLoaded, type } from './utils';

describe('Utils', () => {
  it('#throwIfAlreadyLoaded', () => {
    throwIfAlreadyLoaded(null, 'CoreModule');
    expect(() => throwIfAlreadyLoaded(true, 'CoreModule')).toThrowError(/has already been loaded/);
  });

  it('#type should throw if label is not unique', () => {
    expect(type('A string')).toBe('A string');
    expect(() => type('A string')).toThrowError(/is not unique/);
  });
});
