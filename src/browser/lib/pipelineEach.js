import reduce from 'lodash/collection/reduce';

export default function pipelineEach(functions, initial) {
  return reduce(functions, (acc, fn) => fn(acc), initial);
}
