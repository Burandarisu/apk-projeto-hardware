import api from './config';

export function getMeasure(last = true) {
  return api
    .get('measure', {
      params: {
        last: last === true ? true : undefined,
      },
    })
    .then(res => res.data);
}
