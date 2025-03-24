const axios = require('axios');
const crypto = require('crypto');

// API anahtarlarınızı buraya ekleyin
const API_KEY = '';
const SECRET_KEY = '';
const BASE_URL = 'https://api.mexc.com';
const BASE_URL_FUTURES = 'https://contract.mexc.com/';

// Zaman damgası oluşturma
const getTimestamp = () => {
  return Date.now();
};

// İmza oluşturma
const createSignature = (queryString, secretKey) => {
  return crypto
    .createHmac('sha256', secretKey)
    .update(queryString)
    .digest('hex');
};

// Portföy bilgilerini alma fonksiyonu
const getAccountInfoSpot = async () => {
  try {
    const endpoint = 'api/v1/private/position/open_positions';
    const timestamp = getTimestamp();

    // İstek için gerekli parametreler
    const queryString = `timestamp=${timestamp}`;
    const signature = createSignature(queryString, SECRET_KEY);

    // URL oluşturma
    const url = `${BASE_URL}${endpoint}?${queryString}&signature=${signature}`;

    // İstek başlıkları
    const headers = {
      'X-MEXC-APIKEY': API_KEY
    };

    // API isteğini gönder
    const response = await axios.get(url, { headers });

    // Yanıtı işle
    console.log('Portföy Bilgileri:', response.data);
  } catch (error) {
    console.error('Hata:', error.response ? error.response.data : error.message);
  }
};


const getFuturesAccountInfo = async () => {
    try {
      const endpoint = '/api/v1/private/position/list/history_positions';
      const timestamp = getTimestamp();
  
      // İstek için gerekli parametreler
      const queryString = `timestamp=${timestamp}`;
      const signature = createSignature(queryString, SECRET_KEY);
  
      // URL oluşturma
      const url = `${BASE_URL_FUTURES}${endpoint}?${queryString}&signature=${signature}`;
  
      // İstek başlıkları
      const headers = {
        'X-MEXC-APIKEY': API_KEY
      };
  
      // API isteğini gönder
      const response = await axios.get(url, { headers });
  
      // Yanıtı işle
      console.log('Vadeli İşlem Hesap Bilgileri:', response.data);
    } catch (error) {
      console.error('Hata:', error.response ? error.response.data : error.message);
    }
  };
  
  // Fonksiyonu çağır
  getFuturesAccountInfo();




// Fonksiyonu çağır
//getAccountInfoSpot();
