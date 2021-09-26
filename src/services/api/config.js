import api from './configuration';

export function getConfig() {
  return api
    .get('config', {
      params: {
        last: true,
      },
    })
    .then(res => res.data);
}

export function saveConfig(automatic, temperature, state) {
  return api
    .post('config', {automatic, temperature, state})
    .then(res => res.data);
}
