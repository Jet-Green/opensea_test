// https://docs.opensea.io/reference/getting-assets
const sdk = require('api')('@opensea/v1.0#1j3wv35kyd6wqwc');

/***
 * Если приходит ошибка, то нужно подождать и ещё раз сделать запрос(не знаю, почему)
 */
sdk['retrieving-assets-rinkeby']({ owner: "0x17d27868334fa69668f44c8e1a25d40f4c742cf7", order_direction: 'desc', offset: '0', limit: '3' })
    .then(res => console.log(res))
    .catch(err => {
        console.error(err.status, err.statusText)
        console.error(err)
    });