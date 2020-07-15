import request from './../../bin/httpRequest';

export const espots = (consultType) => {
  const options = {
    method: 'GET',
    url: `/api/wcaas/clarosv/espot/${consultType}`,
  };

  return request.genericHandler(options, null).then((res) => {
    let callback = { action: 'eSpots', success: false };
    if (!res.error) {
      callback = Object.assign({}, callback, { data: res.data.data, success: true });
    } else {
      callback = Object.assign({}, callback, { error: res.error });
    }

    return callback;
  });
};

export default espots;
