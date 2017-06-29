import rp from 'request-promise';

function getAdvertisments() {
  const options = {
    uri: 'http://localhost:3000/v1/advertisements',
    json: true
  };

  return rp(options)
    .then((resp) => {
      // console.log('resp', resp);
      if (resp.meta.count === 1)
        return Promise.reject('No ads found');
      return Promise.resolve(resp.data);
      // return Promise.resolve(resp.data.slice(0, resp.meta.count > 9 ? 10 : resp.meta.count));
    })
    .catch(e => {
      return Promise.reject(e);
    });
}

export default getAdvertisments;
