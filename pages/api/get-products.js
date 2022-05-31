// const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

// const api = new WooCommerceRestApi({
//     url: process.env.NEXT_PUBLIC_NODEJS_SITE_URL,
//     consumerKey: process.env.WC_CONSUMER_KEY,
//     consumerSecret: process.env.WC_CONSUMER_SECRET,
//     version: "wc/v3"

// });
// /**
//  *Get Product
//  *Endpoint /api/get-product
//  *@param req
//  *@param res 
//  *@return {Promise<void>}

//  */
// export default async function handler(req, res) {
//     const responseData = {
//         success: false,
//         product: []
//     }

//     const { perPage } = req?.query ?? {};

//     try {
//         const { data } = await api.get(
//             'products',
//         )
//     } catch ( error ) {
//         responseData.error = error.message;
//         res.status(500).json( responseData);
//     }
// }