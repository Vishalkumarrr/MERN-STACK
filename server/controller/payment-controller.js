
import paytmchecksum from '../paytm/PaytmChecksum.js';
import { paytmParams, paytmMerchantKey } from '../index.js';

export const addPaymentGateway = async (request, response) => {
    try {
        let paytmCheckSum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantKey);

        let params = {
            ...paytmParams, 'CHECKSUMHASH': paytmCheckSum
        }

        response.status(200).json(params);
    } catch (error) {
        response.status(500).json({ error: error.message })
    }

}