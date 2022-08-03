import { PRIV_KEY, PUBLIC_KEY } from '../data/keys';

const axios = require('axios');
const CryptoJS = require('crypto-js');


async function getMarvelData(options) {

  var ts = new Date().getTime();
  var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();


  const offset = options?.offset ?? 0;
  const limit = options?.limit ?? 20;
  const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&offset=${offset}&limit=${limit}`;

  return axios.get(url)

};

export default getMarvelData;