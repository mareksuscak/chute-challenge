import { expect } from 'chai';
import pipelineEach from '../../src/browser/lib/pipelineEach';

describe('pipelineEach', () => {
  it('gradually applies given list of functions to an initial value passed as an argument', () => {
    const fns = [
      (v) => v + 1,
      (v) => v * 2,
      (v) => v + 3,
    ];
    const result = pipelineEach(fns, 2);
    expect(result).to.equal(9);
  });
});
