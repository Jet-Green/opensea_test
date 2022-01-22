
const sdk = require('api')('@opensea/v1.0#1j3wv35kyd6wqwc');

/**
 * Получение последней транзакции, у нас есть все данные(
 *      кто купил,
 *      продавец,
 *      само nft,
 *      контракт
 * )
 */
sdk['retrieving-events-testnets'](
    {
        event_type: 'successful',
        only_opensea: 'true',
        offset: '0',
        limit: '1'
    })
    .then(res => {
        let txs = res.asset_events
        // console.log(txs)
        console.log(txs[0].asset)
    })
    .catch(err => console.error(err));