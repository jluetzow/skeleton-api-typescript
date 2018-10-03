"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = require("./account");
const network_1 = require("./network");
const transaction_1 = require("./example");
const vitals_1 = require("./vitals");
const wallet_1 = require("./wallet");
const responseMiddleware = (req, res, next) => {
    res.set('Content-Type', 'application/json');
    next();
};
exports.routes = (router) => {
    router.use('/vitals', responseMiddleware, vitals_1.vitals());
    router.use('/account', responseMiddleware, account_1.account());
    router.use('/transaction', responseMiddleware, transaction_1.transaction());
    router.use('/wallet', responseMiddleware, wallet_1.wallet());
    router.use('/network', responseMiddleware, network_1.network());
    return router;
};
//# sourceMappingURL=routes.js.map
