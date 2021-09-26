import api from './configuration';

export function getMeasure(query) {
  return api
    .get('measure', {
      params: {
        ...query,
      },
    })
    .then(res => res.data);
}
