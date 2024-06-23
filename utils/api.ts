const dominioAuth0 = 'gestion-ingresos-app.us.auth0.com';

const makePost = (url, body, options = {} as any) => {
  const headers = options.headers || {};
  return fetch(url, { body, headers, method: 'POST' }).then((res) => {
    if (res.statusText === 'No Content') {
      return res;
    }
    return res.json();
  });
};

const makeJSONPost = (url, data, options = {} as any) => {
  const body = JSON.stringify(data);
  const headers = options.headers || {};
  headers['Content-Type'] = 'application/json';

  return makePost(url, body, { headers });
};

export const getAuth0Token = () => {
  const url = `https://${dominioAuth0}/oauth/token `;
  const headers = { 'content-type': 'application/json' };
  const body = {
    client_id: '1qz20ZLTnLUSHHwytd4UErzP5r5fckpm',
    client_secret:
      'bEMBcZtxdo5tlsSX5WqCPZNMozXLvmK9HjFbNjOZCZfcYtSd1ZcMAj5kRu5_PEWZ',
    audience: `https://${dominioAuth0}/api/v2/`,
    grant_type: 'client_credentials',
  };
  return makeJSONPost(url, body, headers);
};

export const createUserAuth0 = (data, token, tokenType) => {
  const url = `https://${dominioAuth0}/api/v2/users`;
  const headers = { Authorization: `${tokenType} ${token}` };
  const body = data;
  return makeJSONPost(url, body, { headers });
};

export const createUser = (data) => {
  const url = `/api/auth0/users`;
  const headers = {};
  const body = { data };
  return makeJSONPost(url, body, headers);
};

export const postEmail = (data: any) => {
  const url = '/api/sendmail/';
  const headers = '';
  return makeJSONPost(url, data, { headers });
};
