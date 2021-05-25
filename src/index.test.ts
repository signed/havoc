import { hello } from './index';

describe('hello world', () => {
  it('should greet the parameter', () => {
    expect(hello('you')).toEqual('Hello you');
  });
});
