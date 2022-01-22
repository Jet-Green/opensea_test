// https://docs.opensea.io/reference/getting-assets
const sdk = require('api')('@opensea/v1.0#1j3wv35kyd6wqwc');

/***
 * Если приходит ошибка, то нужно подождать и ещё раз сделать запрос(не знаю, почему)
 */
sdk['retrieving-assets-rinkeby'](
    {
        owner: '0x062d6d315e6c8aa196b9072d749e3f3f3579fdd0',
        token_ids: '20',
        order_direction: 'desc',
        offset: '0',
        // limit 1, потому что встречаются nft с одинаковыми id
        limit: '1'
    })
    .then(res => console.log(res))
    .catch(err => {
        console.error(err.status, err.statusText)
        console.error(err)
    });