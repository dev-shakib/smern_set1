import Shop from '../models/shop';

const chargeRenew = process.env.SHOPIFY_APP_CHARGE_RENEW == 'true' || false;

const checkCharge = async (req, res, next) => {
    const shop = await Shop.findOne({shop_URI: req.user.shop_URI});
    if (shop.charge_approved && !chargeRenew) {
        res.redirect('/app')
    } else {
        next();
    }
};

export default checkCharge;