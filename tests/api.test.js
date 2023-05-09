const axios = require('axios');
API_URL="http://localhost:4000"

test('test light array', () => {
    expect.assertions(1);
    return axios.get(`${API_URL}/light`)
      .then(light => light.data)
      .then(light => {
        expect(light[0].deviceName).toEqual('light1');
      });
    });
test('test light array', () => {
    expect.assertions(1);
    return axios.get(`${API_URL}/light`)
      .then(light => light.data)
      .then(light => {
        expect(light[0].deviceName).toEqual('light1');
      });
    });
    
test('test ac array', () => {
    expect.assertions(1);
    return axios.get(`${API_URL}/ac`)
      .then(ac => ac.data)
      .then(ac => {
        expect(ac[0].deviceName).toEqual('ac1');
      });
    });

test('test security array', () => {
    expect.assertions(1);
    return axios.get(`${API_URL}/security`)
      .then(security => security.data)
      .then(security => {
        expect(security[0].deviceName).toEqual('sec2');
      });
    });